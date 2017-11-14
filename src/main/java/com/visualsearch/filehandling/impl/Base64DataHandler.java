package com.visualsearch.filehandling.impl;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;

import javax.imageio.ImageIO;

import sun.misc.BASE64Decoder;

@SuppressWarnings("restriction")
public class Base64DataHandler {

	
	public static File decodeToImage(String base64ImageData) {
		 
	    BufferedImage image = null;
	    byte[] imageByte;
	    File outputfile = new File("C:/CCViews/avinash.png");
	    try {	        
	        String base64ImageUrl = base64ImageData.substring(base64ImageData.indexOf(':')+2, base64ImageData.lastIndexOf('}')-1);
	        
	        BASE64Decoder decoder = new BASE64Decoder();
	        imageByte = decoder.decodeBuffer(base64ImageUrl);
	        ByteArrayInputStream bis = new ByteArrayInputStream(imageByte);
	        image = ImageIO.read(bis);
	        
			ImageIO.write(image, "jpg", outputfile);
	        bis.close();
	    } catch (Exception e) {
	        e.printStackTrace();
	    }
	    return outputfile;
	}
	
}
