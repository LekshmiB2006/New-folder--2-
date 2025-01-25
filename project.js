<!DOCTYPE html>
<html lang="en">
<head>
    <title>Trash To Treasure</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">
    <script src="project.js" defer></script>
    <style>
        body,h1,h2,h3,h4,h5 {font-family: "Poppins", sans-serif}
        body {font-size:16px;}
        .w3-half img{margin-bottom:-6px;margin-top:16px;opacity:0.8;cursor:pointer}
        .w3-half img:hover{opacity:1}

        /* Slideshow styles */
        .slideshow-container {
            position: relative;
            max-width: 100%;
            margin: auto;
        }
        .mySlides {
            display: none;
            width: 100%;
            height: 400px; /* Adjust height as needed */
        }
        .prev, .next {
            cursor: pointer;
            position: absolute;
            top: 50%;
            width: auto;
            padding: 16px;
            color: white;
            font-weight: bold;
            font-size: 18px;
            transition: 0.6s ease;
            border-radius: 0 3px 3px 0;
            user-select: none;
        }
        .next {
            right: 0;
            border-radius: 3px 0 0 3px;
        }
        .prev:hover, .next:hover {
            background-color: rgba(0, 0, 0, 0.8);
        }

        /* Carousel styles */
        .carousel {
            display: flex;
            overflow: hidden;
            width: 100%;
            max-width: 600px; /* Adjust as needed */
            margin: auto;
        }
        .carousel img {
            width: 100%;
            transition: transform 0.5s ease;
        }
        .carousel-container {
            display: flex;
            transition: transform 0.5s ease;
        }
        .carousel-button {
            cursor: pointer;
            padding: 10px;
            background-color: #333;
            color: white;
            border: none;
            border-radius: 5px;
            margin: 10px;
        }
    </style>
</head>
<body>

<!-- Sidebar/menu -->
<nav class="w3-sidebar w3-green w3-collapse w3-top w3-large w3-padding" style="z-index:3;width:300px;font-weight:bold;" id="mySidebar"><br>
  <a href="javascript:void(0)" onclick="w3_close()" class="w3-button w3-hide-large w3-display-topleft" style="width:100%;font-size:50px">Close Menu</a>
  <div class="w3-container">
    <h3 class="w3-padding-60"><b>Sparkles<b></b></h3>
  </div>
  <div class="w3-bar-block">
    <a href="#" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Home</a> 
    <a href="#about" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">About</a> 
    <a href="#gallery" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Gallery</a> 
    <a href="#contacts" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Contacts</a> 
  </div>
</nav>

<!-- Top menu on small screens -->
<header class="w3-container w3-top w3-hide-large w3-green w3-xlarge w3-padding">
  <a href="javascript:void(0)" class="w3-button w3-green w3-margin-right" onclick="w3_open()">☰</a>
  <span>SPARKLES</span>
</header>

<!-- Overlay effect when opening sidebar on small screens -->
<div class="w3-overlay w3-hide-large" onclick="w3_close()" style="cursor:pointer" title="close side menu" id="myOverlay"></div>

<!-- !PAGE CONTENT! -->
<div class="w3-main" style="margin-left:340px;margin-right