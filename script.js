(function(){
    'use strict'
    console.log('running js');

    // Select the div by its ID
    var foodixDiv = document.getElementById('foodixID');
    var aggieDiv = document.getElementById('AggieRewardsID');
    var hubbleDiv = document.getElementById('hubbleID');

    // Add a click event listener to the div
    foodixDiv.addEventListener('click', function(event) {
        // Redirect the user to the desired link
        window.location.href = 'foodix.html';
    });
    aggieDiv.addEventListener('click', function(event) {
        // Redirect the user to the desired link
       window.location.href = 'aggierewards.html';
    });

    hubbleDiv.addEventListener('click', function(event) {
        // Redirect the user to the desired link
        window.location.href = 'hubbble.html';
    });
    
})();