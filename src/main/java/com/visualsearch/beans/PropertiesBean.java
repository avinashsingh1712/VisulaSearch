/*
 * Created on 2017-nov-15
 *
 * (c) 2017, Visual Search
 */
package com.visualsearch.beans;

/**
 * 
 * @author avsin3
 *
 */
public class PropertiesBean {

	private String secretKey;

	private float scoreMin;

	private float scoreMax;

	private int searchlimit;

	private String accessKey;

	/**
	 * @return the secretKey
	 */
	public String getSecretKey() {
		return secretKey;
	}

	/**
	 * @param secretKey
	 *            the secretKey to set
	 */
	public void setSecretKey(String secretKey) {
		this.secretKey = secretKey;
	}

	/**
	 * @return the scoreMin
	 */
	public float getScoreMin() {
		return scoreMin;
	}

	/**
	 * @param scoreMin
	 *            the scoreMin to set
	 */
	public void setScoreMin(float scoreMin) {
		this.scoreMin = scoreMin;
	}

	/**
	 * @return the scoreMax
	 */
	public float getScoreMax() {
		return scoreMax;
	}

	/**
	 * @param scoreMax
	 *            the scoreMax to set
	 */
	public void setScoreMax(float scoreMax) {
		this.scoreMax = scoreMax;
	}



	/**
	 * @return the searchlimit
	 */
	public int getSearchlimit() {
		return searchlimit;
	}

	/**
	 * @param searchlimit the searchlimit to set
	 */
	public void setSearchlimit(int searchlimit) {
		this.searchlimit = searchlimit;
	}

	/**
	 * @return the accessKey
	 */
	public String getAccessKey() {
		return accessKey;
	}

	/**
	 * @param accessKey
	 *            the accessKey to set
	 */
	public void setAccessKey(String accessKey) {
		this.accessKey = accessKey;
	}

}
