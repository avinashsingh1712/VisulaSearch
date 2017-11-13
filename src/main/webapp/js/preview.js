 $(function () {

      // Initialise CropSelect
      $('#preview').CropSelectJs();


      // Handle file select change
      $('#file-input').on('change', function() {
    	  /*var tmppath = URL.createObjectURL(event.target.files[0]); 
    	  console.log("hell" +tmppath);*/
    	  
    	  //$("#preview").append('<div class="product_holder1"><img/><div id="more_container"><input id="more" type="button" value="Search Similar" onclick="loadMain();" /></div></div>');
    	  $("#preview1").append('<input id="more" type="button" value="Search Similar" onclick="loadMain();"/>');
        if (this.files && this.files[0]) {
		
          var reader = new FileReader();
          reader.onload = function (e) {
            $('#preview').css("border","7px solid #676565").CropSelectJs('setImageSrc', e.target.result);
			
          };
          reader.readAsDataURL(this.files[0]);
        }
      });


    });
