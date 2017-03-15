(function($){
  $(function(){

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
