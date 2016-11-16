// Widows
$('p').each(function() {
  $(this).html($(this).html().replace(/\s([^\s<]+)\s*$/,'&nbsp;$1'));
});



// Progress bar
var perc = $(".progress").data().percentage;
$('.progress').css("width", perc + '%');
$('.progress-count').html(perc + '%');



// Simple slider
$(document).ready(function(){
  $('.slider').slick({
    draggable: true,
    arrows: true,
    dots: true,
    fade: false,
    speed: 900,
    infinite: true,
    autoplay: true,
    slidesPerView: 1,
    touchThreshold: 100
  });
});
