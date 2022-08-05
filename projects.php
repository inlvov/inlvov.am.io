

<!DOCTYPE html>
<html lang = "en">
<head>
	<title>HRSS - Our Projects</title>
  <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="keywords" content="Hope Restoration South Sudan (HRSS) is a Women Led National organization committed to finding lasting solutions to humanitarian and development challenges facing the people of South Sudan and mobilizing communities to determine their own development and self-determination  HRSS was founded by Angelina Nyajima an elite who believes that social transformation towards sustainable development in South Sudan is possible through engagement of the local community in the development process. HRSS was established in 2010, with Headquarters ‘in Central Equatorial and Coordination offices in Unity State, Jonglei State, Upper Nile State, & Malakal" />
<meta property="og:type" content="website" />
  <meta name="og:site_name" content="Hope Restoration South sudan (HRSS)" />
  <meta property="og:title" content="Hope Restoration South sudan"  />       <!-- <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"> -->
  <link href="/libraries/quix/assets/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
         <link rel="stylesheet"  href="js/splide-4.0.7/dist/css/splide.min.css ">
        <link type="text/css" rel="stylesheet"  href="css/w3.css ">
        <link type="text/css" rel="stylesheet"  href="css/hr.css">
   
    <link rel="stylesheet"  href="css/bootstrap.min.css ">
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>


<body>

<!-- header -->

<?php


include_once "header.php";


include_once "home_slider.php";

include_once "proj_content.php";
 include_once "partner_slide.php";
 include_once "footer.php";

?>







</body>


<script type="text/javascript" src="js/splide-4.0.7/dist/js/splide.min.js"></script>
<script type="text/javascript" src="js/jquery-3.1.1.min.js"></script> 
<script type="text/javascript" src="js/hrss.js"></script>  



<script type="">
  

var splide_l = new Splide( '#pat-', {
  perPage: 3,
  rewind : true,
});

var splide = new Splide( '#org-events', {
  perPage: 1,
  rewind : true,
});

splide.mount();
splide_l.mount();


</script>

</html>