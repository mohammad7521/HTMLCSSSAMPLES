var tabs = $('.tabs');


// calculates the number of selected a elements
var selector = $('.tabs').find('a').length;
//var selector = $(".tabs").find(".selector");

// finds the active elements
var activeItem = tabs.find('.active');
console.log(activeItem);

var activeWidth = activeItem.innerWidth();


$(".selector").css({
//   "left": activeItem.position.left + "px", 
  "width": activeWidth + "px"
});

$(".tabs").on("click","a",function(e){
  e.preventDefault();
  $('.tabs a').removeClass("active");
  $(this).addClass('active');
  var activeWidth = $(this).innerWidth();
  var itemPos = $(this).position();
  $(".selector").css({
    "left":itemPos.left + "px", 
    "width": activeWidth + "px"
  });
});