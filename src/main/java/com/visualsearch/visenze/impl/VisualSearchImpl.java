package com.visualsearch.visenze.impl;

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
	
	private String ACCESS_KEY = "2922ca9709bb6f648b3cc0c95dd25453";
	private String SECRET_KEY = "5ff65d3b5b8f5262c82e5fb4b6c1cc79";
    
	
	/**
	 * 
	 */			
	public String searchByImage(String requestData) {	
		
		if(requestData==null) {
			return "input data is not correct";
		}
		
		ViSearch client = new ViSearch(ACCESS_KEY, SECRET_KEY);
		
		//Set the required filters.
		SearchParams params = setFilters(requestData);
		
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
			System.out.println(ir.getImName());
		}
				
		return searchResult.getRawJson();
	}


	/**
	 * @param requestData
	 * @return
	 */
	private SearchParams setFilters(String requestData) {
		float scoreMin = 0.60F;
		float scoreMax = 1.0F;		
		
		//SearchParams params = new SearchParams("malm2");
		SearchParams params = new SearchParams(requestData);
		params.setLimit(10);
		params.setScore(true);
		params.setScoreMin(scoreMin);
		params.setScoreMax(scoreMax);
		params.setFacet(true);
		params.setFl(null);
		params.setQInfo(true);
		return params;
	}
	

	public static void main (String args[]) {	
		VisualSearchImpl impl = new VisualSearchImpl();
		impl.searchByImage("malm100");		
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
