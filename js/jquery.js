$( document ).ready(function() {
    // alert( "ready!" );


    function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('top', -(scrolled * 0.1) + 'px');
    $('.mg').css('top', -(scrolled * 0.5) + 'px');
    $('.fg').css('top', -(scrolled * 1.5) + 'px');
    $('.farMiddleGround').css('top', -(scrolled * 0.2) + 'px');

}

  $(window).scroll(function(e){
      parallax();
  });

  $("#scubaSteve").click(function(){
        // $("#scubaSteve").hide( "slide", { direction: "down"  }, 2000 );
        alert('click works!');
  });


});
