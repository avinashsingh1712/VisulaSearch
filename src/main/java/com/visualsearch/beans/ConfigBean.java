/*
 * Created on 2017-nov-15
 *
 * (c) 2017, Visual Search
 */
package com.visualsearch.beans;

/**
 * 
 * @author avsin3 - Test123
 *
 */
public class ConfigBean {

	private String secretKey;

	private float scoreMin;

	private float scoreMax;

	private int searchlimit;

	private String accessKey;

	private boolean isScore;

	private boolean isFacet;

	private boolean isAllFl;

	private boolean isQInfo;

	/**
	 * @return the isScore
	 */
	public boolean isScore() {
		return isScore;
	}

	/**
	 * @param isScore
	 *            the isScore to set
	 */
	public void setScore(boolean isScore) {
		this.isScore = isScore;
	}

	/**
	 * @return the isFacet
	 */
	public boolean isFacet() {
		return isFacet;
	}

	/**
	 * @param isFacet
	 *            the isFacet to set
	 */
	public void setFacet(boolean isFacet) {
		this.isFacet = isFacet;
	}

	/**
	 * @return the isAllFl
	 */
	public boolean isAllFl() {
		return isAllFl;
	}

	/**
	 * @param isAllFl
	 *            the isAllFl to set
	 */
	public void setAllFl(boolean isAllFl) {
		this.isAllFl = isAllFl;
	}

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
	 * @param searchlimit
	 *            the searchlimit to set
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

	/**
	 * @return the isQInfo
	 */
	public boolean isQInfo() {
		return isQInfo;
	}

	/**
	 * @param isQInfo
	 *            the isQInfo to set
	 */
	public void setQInfo(boolean isQInfo) {
		this.isQInfo = isQInfo;
	}

}
