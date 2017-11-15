function loadMain() {
	
	var inputImageFile = document.getElementById("file-input");
	var maindiv = document.getElementById("mainDiv");
	var preview = document.getElementById("preview");
	var name = $("#searchName").val();
	
	var filesSelected = document.getElementById("file-input").files;
	
    if (filesSelected.length > 0) {
      var fileToLoad = filesSelected[0];
      mainDiv.innerHTML = "";
  	preview.innerHTML = "";
     var fileReader = new FileReader();

      fileReader.onload = function(fileLoadedEvent) {
        var srcData = fileLoadedEvent.target.result; // <--- data: base64

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
					left2.innerHTML = "";
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
								//text2.innerHTML = v.toFixed(3);
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
        };
        var formData = new FormData($("#file-input")[0]);
       
        var data = JSON.stringify({"url": base64StringFinal});
       //console.log("url:" + data);
       xhr.send(data);
        
      }
      fileReader.readAsDataURL(fileToLoad);
    }
	
	
	
}
