package com.visualsearch.filehandling.impl;

import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;

import com.visualsearch.util.VisualSearchConstants;

import sun.misc.BASE64Decoder;

@SuppressWarnings("restriction")
public class Base64DataHandler {

	public static File decodeToImage(String base64ImageData) throws IOException {

		final File temp = new File(System.getProperty(VisualSearchConstants.JAVA_IO_TMPDIR) + VisualSearchConstants.TEMP_PNG);

		String base64ImageUrl = base64ImageData.substring(base64ImageData.indexOf(':') + 2,	base64ImageData.lastIndexOf('}') - 1);

		BASE64Decoder decoder = new BASE64Decoder();
		byte[] imageByte = decoder.decodeBuffer(base64ImageUrl);
		ByteArrayInputStream bis = new ByteArrayInputStream(imageByte);
		BufferedImage image = ImageIO.read(bis);

		ImageIO.write(image, "jpg", temp);
		bis.close();
		return temp;
	}

}
