(function($){
  $(function(){

// setTimeout(function(){ 
//   $('#kevPic').removeClass('hidden'); 
// }, 1200);


// setTimeout(function(){ 
//   $('.black-ring').fadeTo(3000, 0.05);; 
// }, 1050);


var kevPortfolioText = document.getElementById("kevPortfolioText");
TweenLite.to(kevPortfolioText, 1, {opacity:1, left:20, ease:Power2.easeOut, delay:0.8});

var aboutMeText = document.getElementById("aboutMeText");
TweenLite.to(aboutMeText, 1, {opacity:1, ease:Power2.easeOut, delay:2});


var link1 = document.getElementById("link1");
TweenLite.to(link1, 1, {opacity:1, ease:Power2.easeOut, delay:0.4});

var link2 = document.getElementById("link2");
TweenLite.to(link2, 1, {opacity:1, ease:Power2.easeOut, delay:0.5});

var link3 = document.getElementById("link3");
TweenLite.to(link3, 1, {opacity:1, ease:Power2.easeOut, delay:0.6});

var link4 = document.getElementById("link4");
TweenLite.to(link4, 1, {opacity:1, ease:Power2.easeOut, delay:0.7});

var kevPic = document.getElementById("kevPic");
TweenLite.to(kevPic, 1, {opacity:1, ease:Power2.easeOut, delay:1.5});

var background1 = document.getElementById("background1");
TweenLite.to(background1, 1, {opacity:1, ease:Power2.easeOut});

var section1 = document.getElementById("section1");
TweenLite.to(section1, 1, {opacity:1, ease:Power2.easeOut, delay:2.3});





// var items = $("#gallery li");
// var itemsByTags = [];
// items.each(function(i){
//   var elem = $(this);
//   var tags = elem.data('tags').split(',');

//   elem.attr('data-id',i);

//   $.each(tags,function(key,value){
//     value = $.trim(value);

//     if(! (value in itemsByTags)){
//       itemsByTags[value] = {};
//     }


//     itemsByTags[value].push(elem);
//   });
// });


// createList('All Items', items);

// $.each(itemsByTags, function(k, v){
//   createList(k, v);
// });


// $('#navbar a').live('click', function(e){
//   var link = $(this);

//   link.addClass('active').siblings().removeClass('active');

//   $('#gallery').quicksand(link.data('list').find('li'));
//   e.preventDefault();
// });

// $('#navbar a:first').click();

// function createList(text,items){
//   var ul = $('<ul>',{'class':'hidden'});

//   $.each(items, function(){
//     $(this).clone().appendTo(ul)
//   });

//   ul.appendTo('#gallery');

//   var a = $('<a>',{
//     html:text,
//     href:'#',
//     data:{list:ul}
//   }).appendTo('#navbar');


// }









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
