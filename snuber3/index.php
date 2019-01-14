<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/fontawesome.min.css">
    <script src="js/script.js"></script>
    <title>Snuber</title>
   
</head>

<body>

<nav class=" navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container" >
        <a class="navbar-brand" href="#">SNU</a>
        <button class="navbar-toggler" type="button" (click)="toggleNavbar()" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" [ngClass]="{'show':navbarOpen}" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link" routerLink="/gmaps" routerLinkActive="">Home<span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" routerLink="/posts" routerLinkActive="">Add Post</a>
                <a class="nav-item nav-link" routerLink="/about-us" routerLinkActive="">About Us</a>
                <a class="nav-item nav-link" routerLink="/registration" routerLinkActive="">Register</a>
                <a class="nav-item nav-link" routerLink="/login" routerLinkActive="">Log In</a>
            </div>
        </div>
    </div>
</nav>



<div class="container"></div>
<div class="container" id="map"></div>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA3mCTqdLJTjE6XPFG_hKr6d9NQyPXk1_c&callback=initMap"
        async defer></script>

        

<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/popper.min.js"></script>
<script src="js/bootstrap.min.js"></script>
</body>
</html>
