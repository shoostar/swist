// Widows
$('p').each(function() {
  $(this).html($(this).html().replace(/\s([^\s<]+)\s*$/,'&nbsp;$1'));
});



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
