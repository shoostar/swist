// Widows
$('p').each(function() {
  $(this).html($(this).html().replace(/\s([^\s<]+)\s*$/,'&nbsp;$1'));
});



// Simple parallax background
function Parallax() {
	scrollPos = $(this).scrollTop();
	$('.parallax').css({
		'background-position' : '50% ' + (-scrollPos/4)+"px"
	});
	$('.parallax-content').css({
		'margin-top': (scrollPos/2)+"px",
		'opacity': 1-(scrollPos/250)
	});
}
$(document).ready(function(){
	$(window).scroll(function() {
		Parallax();
	});
});



// Footer reveal
$(document).ready(function() {
  var footerHeight = $('footer').height();

  $('.content').css({
    'margin-bottom': footerHeight + 'px'
  });

  scrollFooter(window.pageYOffset, footerHeight);

  window.onscroll = function() {
    scrollFooter(window.pageYOffset, footerHeight);
  }
});

function scrollFooter(scrollY, heightFooter) { if (scrollY >= heightFooter) {
$('footer').css({ 'bottom': '0px' }); } else { $('footer').css({ 'bottom': '-' +
heightFooter + 'px' }); } }
