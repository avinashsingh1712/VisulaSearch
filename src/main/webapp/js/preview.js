 $(function () {
	 var i = 0;
	   $('#file-input').on('change', function() {
		   $('#preview').html(" ");
    	  $('#preview').CropSelectJs();
    	  $("#preview1").html('<input id="more" type="button" value="Search Similar" onclick="loadMain();"/>');
        if (this.files && this.files[0]) {
		
          var reader = new FileReader();
          reader.onload = function (e) {
        	  $('#preview').css("border","7px solid #676565").CropSelectJs('setImageSrc', e.target.result);
			
          };
          reader.readAsDataURL(this.files[0]);
        }
      });


    });
