function loadMain(){
	var maindiv = document.getElementById("mainDiv");
	var preview = document.getElementById("preview");
	var name = $("#searchName").val();
	$.ajax({url: "search/searchByImage/"+name, success: function(response){
			$.each(response, function(key , value){
			    if(key == "qinfo"){
			    	var iDiv1 = document.createElement('div');
					iDiv1.className = 'inline';
					var text12 = document.createElement('p');
					var text11 = document.createElement('p');
					 var oImg1 = document.createElement("img");
			    
			      $.each(value, function(k1, v1){
			    	  if(k1 == "im_name"){
			    		  console.log("name   "+value.im_name);
							text12.innerHTML = value.im_name;
			    	  }
			    	  if(k1 == "category"){
			    		  console.log("category   "+value.category);
							text11.innerHTML = v1;
			    	  }
			    	  if(k1 == "im_url"){
			    		  console.log("im_url   "+value.im_url);
			    		 
							oImg1.setAttribute('src', v1);
							oImg1.setAttribute('alt', value.im_name);
							oImg1.setAttribute("class","mainImageCont");
			    	  }
			      });
			      iDiv1.appendChild(oImg1);
			      iDiv1.appendChild(text12);
			      iDiv1.appendChild(text11);
			     preview.innerHTML ="";
			     preview.appendChild(iDiv1);
			    }
			   
				if(key == "result"){
					 mainDiv.innerHTML ="";
						$.each(value, function(key1, value1){
						var iDiv = document.createElement('div');
						iDiv.className = 'inline1';
						
						
						$.each(value1, function(k, v){
							if(k == "im_name"){
								console.log("name   "+value1.im_name);
								var text1 = document.createElement('p');
								text1.innerHTML = v;
								iDiv.appendChild(text1);
							}
							if(k == "score"){
								console.log("score  "+value1.score);
								var text2 = document.createElement('p');
								text2.innerHTML = v.toFixed(3);
								
								iDiv.appendChild(text2);
							}
												
							});
					    
						mainDiv.appendChild(iDiv);
						
					});
				}
		
			
		});
    }});
	
	
	
	
	}
