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



// Simple parallax background
var cover = document.querySelector('.parallax'),
  coverHeight = Math.round(cover.offsetHeight),
  translate,
  parallaxThreshold = 3;

function parallax() {
  if (window.scrollY < coverHeight) {
    translate = Math.round(window.scrollY / parallaxThreshold);
    window.requestAnimationFrame(function() {
      cover.style.transform = 'translateY(' + translate + 'px)';
    });
  }
}

parallax();

window.addEventListener('scroll', parallax, false);

window.addEventListener('resize', debounce(function() {
  coverHeight = Math.round(cover.offsetHeight);
}, 800));

function debounce(fn, wait) {
  var timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      fn.apply(this, arguments)
    }, (wait || 1));
  }
}
