/**
 * @author avsin3
 *
 */
package com.visualsearch.config.impl;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import com.visualsearch.beans.ConfigBean;
import com.visualsearch.util.VisualSearchConstants;

/**
 * @author avsin3
 *
 */
public class PropValueHandler {

	public ConfigBean valueHandler() {

		InputStream inputStream = null;
		ConfigBean bean = new ConfigBean();

		try {

			Properties prop = loadFile(inputStream);

			bean.setAccessKey(prop.getProperty(VisualSearchConstants.ACCESS_KEY));
			bean.setSecretKey(prop.getProperty(VisualSearchConstants.SECRET_KEY));

			bean.setScoreMax(Float.valueOf(prop.getProperty(VisualSearchConstants.SCORE_MAX)));
			bean.setScoreMin(Float.valueOf(prop.getProperty(VisualSearchConstants.SCORE_MIN)));
			bean.setSearchlimit(Integer.valueOf(prop.getProperty(VisualSearchConstants.SEARCH_LIMIT)));

			bean.setScore(Boolean.getBoolean(prop.getProperty("isSetScore")));
			bean.setFacet(Boolean.parseBoolean(prop.getProperty("isFacet")));
			bean.setAllFl(Boolean.parseBoolean(prop.getProperty("isAllFL")));

		} catch (IOException ex) {
			ex.printStackTrace();
		} finally {
			if (inputStream != null) {
				try {
					inputStream.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		return bean;
	}

	private Properties loadFile(InputStream inputStream) throws IOException {
		Properties properties = new Properties();
		ClassLoader loader = getClass().getClassLoader();
		inputStream = loader.getResourceAsStream(VisualSearchConstants.CONFIG_PROPERTY_FILE);
		if (inputStream != null) {
			properties.load(inputStream);
		} else {
			throw new FileNotFoundException(
					"Property file '" + VisualSearchConstants.CONFIG_PROPERTY_FILE + "' not found in the classpath");
		}

		return properties;
	}
}