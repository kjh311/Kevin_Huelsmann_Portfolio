$( document ).ready(function() {
// var options = [
//     {selector: '.education-container', offset: 200, callback: '$('.education-container').addClass("animated jello")' },
// ];
// Materialize.scrollFire(options);


  // SCROLLING / ANIMATION:
    // $(function(){
    //         // Ends Animation:
    //   var vendor          = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    //   var bounce          = 'animated bounce';
    //   var rollIn          = "animated rollIn";
    //   var bounceInDown    = "animated bounceInDown";
    //   var flip            = 'animated flip';
    //   var flipInX         = 'animated flipInX';
    //   var lightSpeedIn    = "animated lightSpeedIn";
    //   var zoomIn          = "animated zoomIn";
    //   var bounceOutLeft   = "animated bounceOutLeft";
    //   var bounceOutDown   = "animated bounceOutDown";
    //   var shake           = "animated shake";
    //   var bounceInRight   = "animated bounceInRight";
    //   var zoomOutDown     = "animated zoomOutDown";
    //   var hinge           = "animated hinge";
    //   var rubberBand      = "animated rubberBand";
    //   var rotateOut       = "animated rotateOut";
    //   var jello           = "animated jello";
    //   var fadeOut         = "animated fadeOut";

 // $('.education-container').addClass(jello);


         $('.education-container').waypoint(function(){
            $('.education-container').addClass("animated jello");
           },{offset:'10%'})


//         $('.education-container').waypoint(function(direction) {
//       $('.education-container').addClass('jello');
// });



    // });
// });
});
