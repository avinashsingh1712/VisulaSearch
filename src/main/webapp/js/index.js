function loadMain() {
	
	var inputImageFile = document.getElementById("file-input");
	var maindiv = document.getElementById("mainDiv");
	var preview = document.getElementById("preview");
	var name = $("#searchName").val();
	
	var filesSelected = document.getElementById("file-input").files;
	
    if (filesSelected.length > 0) {
      var fileToLoad = filesSelected[0];
     // mainDiv.innerHTML = "";
  	//preview.innerHTML = "";
  	preview1.innerHTML = "";
     var fileReader = new FileReader();

      fileReader.onload = function(fileLoadedEvent) {
        var srcData = fileLoadedEvent.target.result; 

        var newImage = document.createElement('img');
        newImage.id = "abc";
        newImage.src = srcData;

        document.getElementById("preview").innerHTML = newImage.outerHTML;
        var base64Data =  document.getElementById("abc").src;
        var block = base64Data.split(";");
        var base64StringFinal = block[1].split(",")[1];
                
        var xhr = new XMLHttpRequest();
        var url = "search/imageSearch/searchByImage";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var json = JSON.parse(xhr.responseText);
            	//var json = data;
                $.each(json, function(key, value) {
				if (key == "result") {
					mainDiv.innerHTML = "";
					var product_left1 = document.createElement('div');
					var pTag = document.createElement('p');
					pTag.innerHTML = "Related products";
					product_left1.className = 'mainDiv_left';
					pTag.className = 'preview_left_cont';
					product_left1.appendChild(pTag);
					var pTag1 = document.createElement('p');
					pTag1.innerHTML = "Score";
					
					product_left1.appendChild(pTag1);
					var x = document.createElement("INPUT");
					x.setAttribute("type", "text");
					x.className = "txt_box";
					x.placeholder = 'From';
					var connect = document.createElement('div');
					connect.className = "txt_box_connect";
					var y = document.createElement("INPUT");
					y.setAttribute("type", "text");
					y.className = "txt_box";
					y.placeholder = 'To';
					var btn12 = document.createElement("BUTTON");
					var t = document.createTextNode("View"); 
					btn12.appendChild(t);
					var hrTag = document.createElement('hr');
					hrTag.setAttribute("style", "margin-top:40px;");
					var prod_cat = document.createElement('p');
					prod_cat.innerHTML = "Product category";
					
				    product_left1.appendChild(x);
				    product_left1.appendChild(connect);
				    product_left1.appendChild(y);
				    product_left1.appendChild(btn12);
				    product_left1.appendChild(hrTag);
				    product_left1.appendChild(prod_cat);
					left2.innerHTML = "";
					left2.appendChild(product_left1);
					
						$.each(value, function(key1, value1) {
						var iDiv = document.createElement('div');
						var iDivMou = document.createElement('div');
						var text1 = document.createElement('p');
						var text2 = document.createElement('BUTTON');
						var oImg = document.createElement("img");
						/*var btnn = document.createElement("BUTTON");
						btnn.setAttribute("style","font-size:14px;background-color: #4CAF50");
						btnn.innerHTML = "Ann";*/
						var btnn = document.createElement("BUTTON");
						var brand_title = document.createElement('p');
						var brand_name = document.createElement('p');
						var brand_desc = document.createElement('p');
						 
						iDiv.className = 'inline1';
						$.each(value1, function(k, v) {
							if (k == "im_name") {
								console.log("name   " + value1.im_name);
								
							
								//text1.innerHTML = v;
								iDiv.addEventListener('mouseover', mouseOver);
								  iDiv.addEventListener('mouseout', mouseOut);
								  function mouseOver() {
									  //iDiv.setAttribute("style","height:250px");
									 // iDivMou.className = 'mouDiv';
										btnn.setAttribute("style","font-size:14px;background-color: #09C;color:white;height:35px;width:80%;border-radius:10px");
										btnn.innerHTML = "Buy Online";
									  //text1.innerHTML= v;
										text1.innerHTML= v;
										  iDiv.appendChild(text1);
									  iDiv.appendChild(btnn);
									 
								   
								  }

								  function mouseOut() {
									  //iDiv.setAttribute("style","background-color:white");
									  text1.innerHTML = ' ';
									  btnn.setAttribute("style","display:none");
									
								  }
								
								
							}
							if (k == "score") {
								console.log("score  " + value1.score);
								text2.setAttribute("style","font-size:14px;background-color: #d8ddec;color:white;height:30px;width:80%;border-radius:10px;");
								text2.innerHTML = v.toFixed(3);
								  iDiv.appendChild(text2);
								//text2.innerHTML = v.toFixed(3);
								/*iDiv.addEventListener('mouseover', mouseOver);
								  iDiv.addEventListener('mouseout', mouseOut);*/
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
											  iDiv.appendChild(brand_title);
											  iDiv.appendChild(brand_name);
												iDiv.appendChild(text1);
												iDiv.appendChild(text2);
												iDiv.appendChild(btnn);
												
										   
										  }

										  function mouseOut() {
											  oImg.setAttribute('src', v1);
												oImg.setAttribute('alt',value1.im_name);
												oImg.setAttribute("class","resultImageCont");
												iDiv.appendChild(oImg);
												iDiv.appendChild(brand_title);
												iDiv.appendChild(text2);
												
												
											
										  }
										
										  

									}
									
									if(k1 == "title"){
										console.log(v.title);
										brand_title.innerHTML= v.title;
										  
									}
									if(k1 == "brand"){
										console.log(v.brand);
										brand_name.innerHTML= v.brand;
										  
									}

								});

							}

						});
						iDiv.appendChild(oImg);
						//iDiv.appendChild(btnn);
						iDiv.appendChild(brand_title);
						iDiv.appendChild(text2);
						iDiv.appendChild(text1);
						mainDiv.appendChild(iDiv);
						
					});

				}
			});
            }
        };
        //var formData = new FormData($("#file-input")[0]);
       
        var data = JSON.stringify({"url": base64StringFinal});
       //console.log("url:" + data);
       xhr.send(data);
        
      }
      fileReader.readAsDataURL(fileToLoad);
    }
	
	
	
}

