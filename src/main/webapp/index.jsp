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
<script type="text/javascript">
!function(e,r,t,a,s){e.__visearch_obj=s;var c=e[s]=e[s]||{};c.q=c.q||[],c.factory=function(e){return function(){var r=Array.prototype.slice.call(arguments);return r.unshift(e),c.q.push(r),c}},c.methods=["idsearch","uploadsearch","colorsearch","set","send"];for(var n=0;n<c.methods.length;n++){var o=c.methods[n];c[o]=c.factory(o)}var i=r.createElement(t);i.type="text/javascript",i.async=!0,i.src=a;var h=r.getElementsByTagName(t)[0];h.parentNode.insertBefore(i,h)}(window,document,"script","//cdn.visenze.com/visearch/dist/js/visearch-1.1.0.min.js","visearch");
visearch.set("access_key", "2922ca9709bb6f648b3cc0c95dd25453");
visearch.set("secret_key", "5ff65d3b5b8f5262c82e5fb4b6c1cc79");
</script>

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
<!-- <footer>
    footer
    </footer> -->

</body>

</html>
