package com.visualsearch.ws.impl;
 
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
	public Response getMsg(@PathParam("param") String searchInput) {
		VisualSearchImpl vs = new VisualSearchImpl();
				
		return Response.status(200).entity(vs.searchByImage(searchInput)).build();
 
	}
 
}