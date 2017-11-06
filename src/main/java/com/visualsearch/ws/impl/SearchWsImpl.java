package com.visualsearch.ws.impl;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.visualsearch.visenze.impl.VisualSearchImpl;

@Path("/imageSearch")
public class SearchWsImpl {

	@GET
	@Path("/{param}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getSearchResult(@PathParam("param") String searchInput) {
		VisualSearchImpl vs = new VisualSearchImpl();

		return Response.status(200).entity(vs.searchByName(searchInput)).build();

	}

	
	@POST
	@Path("/searchByImage")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response searchByImage(String url) {
		VisualSearchImpl vs = new VisualSearchImpl();
		
		return Response.status(200).entity(vs.searchByImage(url)).build();
	}
	
	
	@POST
	@Path("/searchByUrl")
	@Produces(MediaType.APPLICATION_JSON)
	public Response searchByUrl(@FormParam("url") String url) {
		VisualSearchImpl vs = new VisualSearchImpl();
		
		return Response.status(200).entity(vs.searchByUrl(url)).build();
	}



}