function loadMain() {
	var maindiv = document.getElementById("mainDiv");
	var preview = document.getElementById("preview");
	var name = $("#searchName").val();
	$.ajax({
		url : "search/searchByImage/" + name,
		success : function(response) {
			console.log(response);
			$.each(response, function(key, value) {
				if (key == "qinfo") {
					var iDiv1 = document.createElement('div');
					iDiv1.className = 'inline';
					var text12 = document.createElement('p');
					var text11 = document.createElement('p');
					var oImg1 = document.createElement("img");

					$.each(value, function(k1, v1) {
						if (k1 == "im_name") {
							console.log("name   " + value.im_name);
							text12.innerHTML = value.im_name;
						}
						if (k1 == "category") {
							console.log("category   " + value.category);
							text11.innerHTML = v1;
						}
						if (k1 == "im_url") {
							console.log("im_url   " + value.im_url);
							oImg1.setAttribute('src', v1);
							oImg1.setAttribute('alt', value.im_name);
							oImg1.setAttribute("class", "mainImageCont");
						}
					});
					iDiv1.appendChild(oImg1);
					iDiv1.appendChild(text12);
					iDiv1.appendChild(text11);
					preview.innerHTML = "";
					preview.appendChild(iDiv1);
					
				}

				if (key == "result") {
					mainDiv.innerHTML = "";
					var product_left1 = document.createElement('div');
					var pTag = document.createElement('p');
					pTag.innerHTML = "Related products";
					product_left1.className = 'mainDiv_left';
					pTag.className = 'preview_left_cont';
					product_left1.appendChild(pTag);
					left2.innerHTML = "";
					var radioInput = document.createElement('input');
			        radioInput.setAttribute('type', 'radio');
			        var radioInput2 = document.createElement('input');
			        radioInput2.setAttribute('type', 'radio');
			        product_left1.appendChild(radioInput);
			        product_left1.appendChild(radioInput2);
					left2.appendChild(product_left1);
					
						$.each(value, function(key1, value1) {
						var iDiv = document.createElement('div');
						var text1 = document.createElement('p');
						var text2 = document.createElement('p');
						var oImg = document.createElement("img");
						iDiv.className = 'inline1';
						$.each(value1, function(k, v) {
							if (k == "im_name") {
								console.log("name   " + value1.im_name);
								//text1.innerHTML = v;
								iDiv.addEventListener('mouseover', mouseOver);
								  iDiv.addEventListener('mouseout', mouseOut);
								  function mouseOver() {
									  text1.innerHTML= v;
									  iDiv.appendChild(text1);
									 
								   
								  }

								  function mouseOut() {
									  text1.innerHTML = ' ';
									
								  }
								
								
							}
							if (k == "score") {
								console.log("score  " + value1.score);
								
								iDiv.addEventListener('mouseover', mouseOver);
								  iDiv.addEventListener('mouseout', mouseOut);
								  function mouseOver() {
									  text2.innerHTML = v.toFixed(3);
									  iDiv.appendChild(text2);
								   
								  }

								  function mouseOut() {
									  text2.innerHTML = ' ';
									
								  }
							}

							if (k == "value_map") {
								$.each(v, function(k1, v1) {
									if (k1 == "im_url") {
										console.log("img  " + v1);
										oImg.setAttribute('src', v1);
										oImg.setAttribute('alt',value1.im_name);
										oImg.setAttribute("class","resultImageCont");
										
										iDiv.addEventListener('mouseover', mouseOver);
										  iDiv.addEventListener('mouseout', mouseOut);
										  function mouseOver() {
											  iDiv.appendChild(oImg);
											  iDiv.appendChild(text2);
												iDiv.appendChild(text1);
										   
										  }

										  function mouseOut() {
											  oImg.setAttribute('src', v1);
												oImg.setAttribute('alt',value1.im_name);
												oImg.setAttribute("class","resultImageCont");
												iDiv.appendChild(oImg);
											
										  }
										
										  

									}

								});

							}

						});
						iDiv.appendChild(oImg);
						iDiv.appendChild(text2);
						iDiv.appendChild(text1);
						mainDiv.appendChild(iDiv);
						
						
						
					});

				}
				

			});
		}
	});

}


