function loadMain(){
	var maindiv = document.getElementById("mainDiv");
	var preview = document.getElementById("preview");
	var name = $("#searchName").val();
	$.ajax({url: "search/searchByImage/"+name, success: function(response){
		console.log(response);
        //$("mainDiv").html(result);
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
							/*oImg1.setAttribute('height', '300');
							oImg1.setAttribute('width', '200');*/
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
					 /*var iDiv2 = document.createElement('div');
						iDiv2.className = 'result';*/
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
							/*if(k == "im_url"){
								var oImg = document.createElement("img");
								oImg.setAttribute('src', v);
								oImg.setAttribute('alt', value1.im_name);
								oImg.setAttribute('height', '100');
								oImg.setAttribute('width', '100');
								iDiv.appendChild(oImg);
							}*/
							
							
							});
					    
						mainDiv.appendChild(iDiv);
						
					});
				}
		
			
		});
    }});
	
	
	/*var elem = document.getElementByClass('inline1');
	  var ausgabe = document.getElementByClass('inline1');
	  elem.addEventListener('mouseover', mouseOver);
	  elem.addEventListener('mouseout', mouseOut);

	  function mouseOver() {
	    ausgabe.innerHTML = 'Ich bin dynamisch!';
	    elem.innerHTML = 'Drüber!';
	  }

	  function mouseOut() {
	    ausgabe.innerHTML = ' ';
		elem.innerHTML = 'Wieder weg!';
	  }*/
	
	/*for(var i = 1 ; i <=3;  i++){
		var iDiv = document.createElement('div');
		iDiv.className = 'inline';
		
		var oImg = document.createElement("img");
		oImg.setAttribute('src', 'img/img'+i+'.jpg');
		oImg.setAttribute('alt', 'img'+i+'');
		oImg.setAttribute('height', '100');
		oImg.setAttribute('width', '100');
		iDiv.appendChild(oImg);
		
		var text1 = document.createElement('p');
		text1.innerHTML = "Hello"+i;
		iDiv.appendChild(text1);
		
		var text2 = document.createElement('p');
		text2.innerHTML = "Hi"+i;
		iDiv.appendChild(text2);
		

		mainDiv.appendChild(iDiv);
	}*/
	
	}