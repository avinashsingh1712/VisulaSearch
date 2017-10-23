package com.visualsearch.ws.impl;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.visualsearch.visenze.impl.VisualSearchImpl;

@Path("/searchByImage")
public class SearchWsImpl {

	@GET
	@Path("/{param}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getSearchResult(@PathParam("param") String searchInput) {
		VisualSearchImpl vs = new VisualSearchImpl();

		return Response.status(200).entity(vs.search(searchInput)).build();

	}

	@Path("/JPG")
	@Consumes({ MediaType.APPLICATION_JSON })
	@Produces({"image/jpeg,image/png"})
	public Response createProductInJSON(String url) {
		VisualSearchImpl vs = new VisualSearchImpl();
		//String result = "Product created : " + product;
		return Response.status(201).entity(vs.search(url)).build();

	}

}