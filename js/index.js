// Widows
// $('p').each(function() {
//   $(this).html($(this).html().replace(/\s([^\s<]+)\s*$/,'&nbsp;$1'));
// });



// Lazy load backgrounds
function lazyLoadBg(el, imageSource) {
  $('<img/>').attr('src', imageSource).on({
    load: function() {
      $(this).remove();
      $(el).css('backgroundImage', 'url(' + imageSource + ')');
      $(el).css('opacity', '1');
    },
    error: function() {
      $(this).remove();
    }
  });
}

$('.lazy').each(function(index, el) {
  lazyLoadBg(el, $(el).data('src'));
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
