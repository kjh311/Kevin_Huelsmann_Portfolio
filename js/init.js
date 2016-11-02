(function($){
  $(function(){



    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    // $('.collapsible').collapsible();





    $("#nav-mobile").on("click", function() {
     $("#sidenav-overlay").trigger("click");
     return false;
    });


    // $(".button-collapse").on("click", function() {
    //  $("#sidenav-overlay").addClass('z');
    // });





  }); // end of document ready
})(jQuery); // end of jQuery name space
