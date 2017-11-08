$(function () {
    $("#file-input").change(function () {
        $("#preview").html("");
        $("#mainDiv").html("");
        var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png|.bmp)$/;
        if (regex.test($(this).val().toLowerCase())) {
            if ($.browser.msie && parseFloat(jQuery.browser.version) <= 9.0) {
                $("#preview").show();
                $("#preview")[0].filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = $(this).val();
            }
            else {
                if (typeof (FileReader) != "undefined") {
                    $("#preview").show();
                    $("#preview").append('<div class="product_holder1"><img/><div id="more_container"><input id="more" type="button" value="Search Similar" onclick="loadMain();" /></div></div>');
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $("#preview img").attr("src", e.target.result).css({"height": "220px","width": "400px","padding":"22px","background":"gray"});
                    }
                    reader.readAsDataURL($(this)[0].files[0]);
                } else {
                    alert("This browser does not support FileReader.");
                }
            }
        } else {
            alert("Please upload a valid image file.");
        }
    });
})
