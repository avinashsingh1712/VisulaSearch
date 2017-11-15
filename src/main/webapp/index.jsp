<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Visual Search</title>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

<link href="CSS/crop.css" rel="stylesheet" type="text/css" />
  
<link rel="stylesheet" type="text/css" href="CSS/style.css">
 <script src="js/crop.js"></script>
<script type="text/javascript" src="js/index.js"></script>
<script type="text/javascript" src="js/preview.js"></script>


</head>
<body>
<div id="allContent">
<div id="mainPadding">
<form>
<div id="logo"><img src="images/ikea.gif" style="height:40px;margin-top:10px"/>
<input type ="search" id="searchName" placeholder="Search by Name"/>
<div class="image-upload" style="display: inline-block;">
    <label for="file-input">
        <img src="images/Camera-icon.png"/>
    </label>

    <input id="file-input" type="file"/>
    
</div> 
 

</div> 


<ul>
  <li><a class="active" href="#">Offers</a></li>
  <li><a href="#">New</a></li>
  <li><a href="#">IDEAS</a></li>
  <li><a href="#">Living room</a></li>
</ul>

<div id="preview_left">
<div class="preview_left_cont">Search Results</div>
</div>
<div id="preview">

</div>
<div id="preview1">

</div>

<br />
<hr style="margin-top:0px;margin-bottom: 0px;width: 85%;float: left;">
<div id="left2"></div>
<div id="mainDiv"> </div>

</form>
</div>
</div>


</body>

</html>
