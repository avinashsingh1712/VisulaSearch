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
	
	public VisualSearchImpl() {
		// TODO Auto-generated constructor stub
	}
	
	/**
	 * 
	 */			
	public String searchForSimilarRecommendations(String im_name) {	
		
				
		//Set the required filters.
		SearchParams params = setFilters(im_name);
		
		PagedSearchResult searchResult = client.search(params);
		
		String errorMessage = searchResult.getErrorMessage();
		if(errorMessage != null) {
			return errorMessage;
		}
		
		System.out.println("Search data list - "+searchResult.getRawJson());
		//System.out.println("Search image result. - "+searchResult.getResult());
		
		List<ImageResult> result = searchResult.getResult();
		for (ImageResult imageResult : result) {			
			ImageResult ir =imageResult;
		//	System.out.println(ir.getImName());
		}
				
		return searchResult.getRawJson();
	}

	
	public String searchByUploadedImage (){
		//Searching an uploaded image file
		File imageFile = new File("C:/Users/Public/Pictures/Sample Pictures/Penguins.jpg");
		UploadSearchParams params = new UploadSearchParams(imageFile);
		params.setFacet(true);
		//System.out.println(params.getImageFile());
		//PagedSearchResult searchResult = client.uploadSearch(params);
		//if(searchResult.getErrorMessage()!= null) {
		//	return searchResult.getErrorMessage();
		//}
		//System.out.println(searchResult.getRawJson());
		
		
		//Searching a publicly accessible image URL
		String url = "http://www.ikea.com/us/en/images/products/billy-bookcase-white__0252367_PE391149_S4.JPG";
		UploadSearchParams params2 = new UploadSearchParams(url);
		
		PagedSearchResult searchResult2 = client.uploadSearch(params);
		System.out.println(params2.getImageUrl());
		
		return "";
	}
	

	/**
	 * @param requestData
	 * @return
	 */
	private SearchParams setFilters(String requestData) {
		float scoreMin = 0.60F;
		float scoreMax = 1.0F;	
		
		List<String> fl = new ArrayList<String>();
		fl.add(requestData);
		
		//SearchParams params = new SearchParams("malm2");
		SearchParams params = new SearchParams(requestData);
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
		
		//curl "http://visearch.visenze.com/search?im_name=malm100&page=1&limit=30&score=true&fl=im_url&dedup=false" \-u access_key:secret_key
	}
	

	public static void main (String args[]) {	
		VisualSearchImpl impl = new VisualSearchImpl();
		impl.searchForSimilarRecommendations("malm100");	
		//System.out.println(impl.searchByUploadedImage());
	}
	
	/**
	 * 
	 * @param uploadSearchParams
	 * @return
	 */
	public PagedSearchResult uploadSearchImages(UploadSearchParams uploadSearchParams){
		
		ViSearch client = new ViSearch(ACCESS_KEY, SECRET_KEY);
		
		List<Image> images = new ArrayList<Image>();
		String imName = "new_upload_IKEA2";
		String imUrl = "http://www.ikea.com/ms/media/logos/diners.gif";

		// add metadata to your image
		Map<String, String> metadata = new HashMap<String, String>();
		metadata.put("category", "IKEA");
		//metadata.put("description", "A pair of high quality leather wingtips");
		//metadata.put("price", "100.0");
		images.add(new Image(imName, imUrl, metadata));
		client.insert(images);
		
		return null;
	}
	
		
}
