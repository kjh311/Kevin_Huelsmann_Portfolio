(function($){
  $(function(){



    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    // $('.collapsible').collapsible();





    $("#nav-mobile").on("click", function() {
    $("#sidenav-overlay").trigger("click");
    return false;
});





  }); // end of document ready
})(jQuery); // end of jQuery name space
