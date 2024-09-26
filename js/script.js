$(document).ready(function () {
    $('#navContact').on('click', function (){
        $('#contact').slideToggle();

    });

    $('#closeBox').on('click', function (){
        $('#contact').toggle();

    });
    
});