(function(){
    'use strict'
    console.log('running js');

    // Select the div by its ID
    var foodixDiv = document.getElementById('foodixID');
    var aggieDiv = document.getElementById('AggieRewardsID');
    var hubbleDiv = document.getElementById('hubbleID');

    var rmp = document.getElementById('RMP');
    var graphitecture = document.getElementById('Graphitecture');
    var croukets = document.getElementById('croukets');

    var galleryDiv = document.getElementById('mainGallery');
    var mainUCD = document.getElementById('mainUCD');
    var mainMarketing = document.getElementById('mainMarketing');
    var mainGamedesign = document.getElementById('mainGamedesign');

    // Add a click event listener to the div
    foodixDiv.addEventListener('click', function() {
        // Redirect the user to the desired link
        window.location.href = 'foodix.html';
    });
    
    aggieDiv.addEventListener('click', function() {
        // Redirect the user to the desired link
       window.location.href = 'aggierewards.html';
    });

    hubbleDiv.addEventListener('click', function() {
        // Redirect the user to the desired link
        window.location.href = 'hubbble.html';
    });

    rmp.addEventListener('click', function() {
        // Redirect the user to the desired link
        window.location.href = 'restmeetplay.html';
    });

    graphitecture.addEventListener('click', function() {
        // Redirect the user to the desired link
        window.location.href = 'graphitecture.html';
    });

    croukets.addEventListener('click', function() {
        // Redirect the user to the desired link
        window.location.href = 'croukets.html';
    });

    galleryDiv.addEventListener('click', function() {
        // Redirect the user to the desired link
        window.location.href = 'gallery.html';
    }); 

    mainUCD.addEventListener('click', function() {
        // Redirect the user to the desired link
        window.location.href = 'ucd.html';
    }); 

    mainMarketing.addEventListener('click', function() {
        // Redirect the user to the desired link
        window.location.href = 'marketing.html';
    }); 

    mainGamedesign.addEventListener('click', function() {
        // Redirect the user to the desired link
        window.location.href = 'gamedesign.html';
    }); 


    
})();