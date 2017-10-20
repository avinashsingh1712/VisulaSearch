package com.visualsearch.visenze.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import com.visenze.visearch.Facet;
import com.visenze.visearch.Image;
import com.visenze.visearch.PagedSearchResult;
import com.visenze.visearch.SearchParams;
import com.visenze.visearch.UploadSearchParams;
import com.visenze.visearch.ViSearch;

import sun.applet.Main;

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
		
		float scoreMin = 0.5F;
		float scoreMax = 1F;
		ViSearch client = new ViSearch(ACCESS_KEY, SECRET_KEY);
		
		//SearchParams params = new SearchParams("malm2");
		SearchParams params = new SearchParams(requestData);
		params.setLimit(100);
		params.setScoreMin(scoreMin);
		params.setScoreMax(scoreMax);
		PagedSearchResult searchResult = client.search(params.setLimit(100));
		
		String errorMessage = searchResult.getErrorMessage();
		if(errorMessage != null) {
			return errorMessage;
		}
		
		System.out.println("Search im id - "+searchResult.getImId());
		System.out.println("Search data list - "+searchResult.getRawJson());
		System.out.println("Search data result - "+searchResult.getRawResponseMessage());
		System.out.println("Search total no. - "+searchResult.getTotal());
		
		Map<String, String> headers = searchResult.getHeaders();
		Iterator itr= headers.entrySet().iterator();
		while (itr.hasNext()) {
			System.out.println(itr.next());
		}
		
		List<Facet> list = searchResult.getFacets();
		/*for (Facet facet : list) {
			System.out.println("list data - "+facet);
		}*/
		System.out.println("Search data result - "+searchResult.getRawResponseMessage());
		return searchResult.getRawJson();
	}
	

	public static void main (String args[]) {	
		VisualSearchImpl impl = new VisualSearchImpl();
		impl.searchByImage("malm2");		
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
