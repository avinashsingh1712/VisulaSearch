function loadMain() {
	
	var inputImageFile = document.getElementById("file-input");
	var maindiv1 = document.getElementById("mainDiv1");
	/*var pagi = document.createElement('button');
	pagi.innerHTML = "Show comparison";
	var pagi1 = document.createElement('button');
	pagi1.innerHTML = "Slideshow";*/
	
	var maindiv = document.getElementById("mainDiv");
	var preview = document.getElementById("preview");
	var name = $("#searchName").val();
	
	var filesSelected = document.getElementById("file-input").files;
	
    if (filesSelected.length > 0) {
      var fileToLoad = filesSelected[0];
    
     var fileReader = new FileReader();

      fileReader.onload = function(fileLoadedEvent) {
        var srcData = fileLoadedEvent.target.result; 

        var newImage = document.createElement('img');
        newImage.id = "base_id";
        newImage.src = srcData;

        document.getElementById("preview2").innerHTML = newImage.outerHTML;
        var base64Data =  document.getElementById("base_id").src;
        var block = base64Data.split(";");
        var base64StringFinal = block[1].split(",")[1];
        
                
        var xhr = new XMLHttpRequest();
        var url = "search/imageSearch/searchByImage";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var json = JSON.parse(xhr.responseText);
            	
                var i = 0;
                $.each(json, function(key, value) {
				if (key == "result") {
					
					
					mainDiv.innerHTML = "";
					var product_left1 = document.createElement('div');
					var pTag = document.createElement('p');
					pTag.innerHTML = "Related products";
					product_left1.className = 'mainDiv_left';
					pTag.className = 'preview_left_cont';
					product_left1.appendChild(pTag);
					
					var hrTag = document.createElement('hr');
					hrTag.setAttribute("style", "margin-top:40px;");
					var prod_cat = document.createElement('p');
					prod_cat.innerHTML = "Product category";
					var vCat = document.createElement('p');
					vCat.innerHTML = "View all";
					var vCat1 = document.createElement('p');
					vCat1.innerHTML = "Product Title";
				   
				    
				    product_left1.appendChild(prod_cat);
				    product_left1.appendChild(vCat);
				    product_left1.appendChild(vCat1);
				    product_left1.appendChild(hrTag);
					left2.innerHTML = "";
					left2.appendChild(product_left1);
					
						$.each(value, function(key1, value1) {
						var iDiv = document.createElement('div');
						var iDivMou = document.createElement('div');
						var text1 = document.createElement('p');
						var text2 = document.createElement('p');
						var oImg = document.createElement("img");
						
						var btnn = document.createElement("BUTTON");
						var brand_title = document.createElement('p');
						var brand_name = document.createElement('h5');
						var brand_desc = document.createElement('p');
						var hrTag = document.createElement('hr');
						hrTag.setAttribute("style","width:90%");
						iDiv.className = 'inline1';
						$.each(value1, function(k, v) {
							if (k == "im_name") {
								i = i + 1;}
							if (k == "score") {
								text2.innerHTML = "Score : " + v.toFixed(3);
								//text2.innerHTML = "Score : " + v *100;
								  iDiv.appendChild(text2);	
							}

							if (k == "value_map") {
								$.each(v, function(k1, v1) {
									if (k1 == "im_url") {
										oImg.setAttribute('src', v1);
										oImg.setAttribute('alt',value1.im_name);
										oImg.setAttribute("class","resultImageCont");
										}
									
									if(k1 == "title"){
										brand_title.innerHTML= v.title;	  
									}
									if(k1 == "brand"){
										brand_name.innerHTML= v.brand;	  
									}
									if(k1 == "description"){
										brand_desc.innerHTML= v.description;	  
									}

								});

							}

						});
						
						iDiv.appendChild(oImg);
						iDiv.appendChild(brand_name);
						iDiv.appendChild(brand_title);
						iDiv.appendChild(brand_desc);
						iDiv.appendChild(text2);
						iDiv.appendChild(text1);
						btnn.setAttribute("id", "btnnid"+i);
						/*btnn.setAttribute("style","font-size:14px;background-color: #09C;color:white;height:35px;width:80%;border-radius:10px;margin-top:10px");*/
						btnn.setAttribute("class","buy_btnn");
						btnn.innerHTML = "Buy Online";
						iDiv.appendChild(btnn);
						iDiv.setAttribute("id", i);
						/*maindiv1.innerHTML = '';
						maindiv1.appendChild(pagi);
						maindiv1.appendChild(pagi1);*/
						
						mainDiv.appendChild(iDiv);		
					});

				}
			});
            }
        };
        //var formData = new FormData($("#file-input")[0]);
       
        var data = JSON.stringify({"url": base64StringFinal});
       
       xhr.send(data);
        
      }
      fileReader.readAsDataURL(fileToLoad);
    }
	
	
	
}

