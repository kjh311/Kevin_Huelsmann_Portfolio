(function($){
  $(function(){



    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    // $('.collapsible').collapsible();





    $("#nav-mobile").click(function(){
      $("#nav-mobile").addClass("animated slideOutLeft");
      $('#sidenav-overlay').fadeTo( "slow" , 0, function() {
    // Animation complete.
  });
      function explode(){
        $("#nav-mobile").removeClass("animated slideOutLeft");
        $("#nav-mobile").css({ left: -250});
      }
      setTimeout(explode, 1000);


    });




  }); // end of document ready
})(jQuery); // end of jQuery name space
