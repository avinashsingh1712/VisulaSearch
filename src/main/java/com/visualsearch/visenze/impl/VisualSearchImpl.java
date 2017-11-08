package com.visualsearch.visenze.impl;

import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.visenze.visearch.Image;
import com.visenze.visearch.ImageResult;
import com.visenze.visearch.PagedSearchResult;
import com.visenze.visearch.SearchParams;
import com.visenze.visearch.UploadSearchParams;
import com.visenze.visearch.ViSearch;

/**
 * 
 * @author avsin3
 *
 */
public class VisualSearchImpl {

	private static String ACCESS_KEY = "2922ca9709bb6f648b3cc0c95dd25453";
	private static String SECRET_KEY = "5ff65d3b5b8f5262c82e5fb4b6c1cc79";
	private static ViSearch client = new ViSearch(ACCESS_KEY, SECRET_KEY);
	private float scoreMin = 0.90F;
	private float scoreMax = 1.0F;

		
	
	/**
	 * This will search the similar images for given image.
	 * @return String
	 */
	public String searchByImage (String imageUrl) {
		
		File imageFile = new File(imageUrl);
		UploadSearchParams params = new UploadSearchParams(imageFile);// how its reading the image without sending the file.
		
		//  configurable--
		params.setLimit(30);
		params.setPage(1);
		params.setScore(true);
		//params.setScoreMin(scoreMin);
		//params.setScoreMax(scoreMax);
		params.setFacet(true);		
		List<String> fl = new ArrayList<String>();
		fl.add(imageFile.getAbsolutePath());
		params.setFl(fl);
		params.setGetAllFl(true); // to get all the image URLS
		params.setQInfo(true);// To get the main image URL
		
		PagedSearchResult searchResult = client.uploadSearch(params);
		

		String errorMessage = searchResult.getErrorMessage();
		if (errorMessage != null) {
			return errorMessage;
		}
		
		System.out.println("Search data list - " + searchResult.getRawJson());
		
		return searchResult.getRawJson();
	}
	

	/**
	 * 
	 * @param this will search the similar images by "im_name"
	 * @return
	 */
	public String searchByName(String im_name) {

		// Set the required filters.
		SearchParams params = setFiltersForSimilarRecommendations(im_name);

		PagedSearchResult searchResult = client.search(params);

		String errorMessage = searchResult.getErrorMessage();
		if (errorMessage != null) {
			return errorMessage;
		}

		System.out.println("Search data list - " + searchResult.getRawJson());
		// System.out.println("Search image result. -
		// "+searchResult.getResult());

		List<ImageResult> result = searchResult.getResult();
		for (ImageResult imageResult : result) {
			ImageResult ir = imageResult;
			// System.out.println(ir.getImName());
		}

		return searchResult.getRawJson();
	}
	
	
	
	/**
	 * This will search the image with URL
	 * @param url
	 * @return
	 */
	public String searchByUrl(String url) {
		// Searching an uploaded image file
		File imageFile = new File("C:/Users/Public/Pictures/Sample Pictures/Penguins.jpg");
		//String url = "http://www.ikea.com/us/en/images/products/billy-bookcase-white__0252367_PE391149_S4.JPG";
		UploadSearchParams params = setFiltersForSearchByUploadedImageAndURL(url);

		// params.setDetection(detection)
		// System.out.println(params.getImageFile());
		// PagedSearchResult searchResult = client.uploadSearch(params);
		// if(searchResult.getErrorMessage()!= null) {
		// return searchResult.getErrorMessage();
		// }
		// System.out.println(searchResult.getRawJson());

		// Searching a publicly accessible image URL

		PagedSearchResult searchResult2 = client.uploadSearch(params);
		System.out.println(searchResult2.getRawJson());
		System.out.println(searchResult2.getErrorMessage());

		return "";
	}

	/**
	 * @param url
	 * @return
	 */
	private UploadSearchParams setFiltersForSearchByUploadedImageAndURL(String url) {
		UploadSearchParams params = new UploadSearchParams(url);
		params.setFacet(true);
		params.setGetAllFl(true);
		params.setLimit(30);
		params.setPage(1);
		params.setScore(true);
		params.setQInfo(true);

		List<String> fl = new ArrayList<String>();
		fl.add(url);
		params.setFl(fl);
		return params;
	}

	/**
	 * @param requestData
	 * @return
	 */
	private SearchParams setFiltersForSimilarRecommendations(String requestData) {

		SearchParams params = new SearchParams(requestData);

		List<String> fl = new ArrayList<String>();
		fl.add(requestData);

		// SearchParams params = new SearchParams("malm2");
		params.setLimit(30);
		params.setPage(1);
		params.setScore(true);
		params.setScoreMin(scoreMin);
		params.setScoreMax(scoreMax);
		params.setFacet(true);
		params.setFl(fl);
		params.setGetAllFl(true); // to get all the image URLS
		params.setQInfo(true);// To get the main image URL
		return params;
	}

	public static void main(String args[]) {
		VisualSearchImpl impl = new VisualSearchImpl();
		//impl.searchForSimilarRecommendations("malm100");
		//String url = "http://www.ikea.com/us/en/images/products/billy-bookcase-white__0252367_PE391149_S4.JPG";
		//impl.searchByUploadedImageAndURL(url);
		impl.searchByImage("C:/Users/Public/Pictures/Sample Pictures/Penguins.jpg");
	}

	/**
	 * 
	 * @param uploadSearchParams
	 * @return
	 */
	private PagedSearchResult uploadSearchImages(UploadSearchParams uploadSearchParams) {

		ViSearch client = new ViSearch(ACCESS_KEY, SECRET_KEY);

		List<Image> images = new ArrayList<Image>();
		String imName = "new_upload_IKEA2";
		String imUrl = "http://www.ikea.com/ms/media/logos/diners.gif";

		// add metadata to your image
		Map<String, String> metadata = new HashMap<String, String>();
		metadata.put("category", "IKEA");
		// metadata.put("description", "A pair of high quality leather
		// wingtips");
		// metadata.put("price", "100.0");
		images.add(new Image(imName, imUrl, metadata));
		client.insert(images);

		return null;
	}

}
