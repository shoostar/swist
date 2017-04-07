// Widows
$('p').each(function() {
  $(this).html($(this).html().replace(/\s([^\s<]+)\s*$/,'&nbsp;$1'));
});



if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  $('header').removeClass('.parallax');
  $('section').removeClass('.parallax');
  $('.content').css({
    'padding-bottom': 0,
    'margin-bottom': 0
  });
  $('footer').css({
    'position': 'inherit'
  });
} else {
  // Footer reveal
  $(document).ready(function() {
    var footerHeight = $('footer').height();

    $('.content').css({
      'margin-bottom': footerHeight + 'px',
      'position': 'relative'
    });

    scrollFooter(window.pageYOffset, footerHeight);

    window.onscroll = function() {
      scrollFooter(window.pageYOffset, footerHeight);
    }
  });

  function scrollFooter(scrollY, heightFooter) { if (scrollY >= heightFooter) {
  $('footer').css({ 'bottom': '0px' }); } else { $('footer').css({ 'bottom': '-' +
  heightFooter + 'px' }); } }

  // Simple parallax background
  function Parallax() {
  	scrollPos = $(this).scrollTop();
  	$('.parallax').css({
  		'background-position' : '50% ' + (50 + scrollPos/50)+"%"
  	});
  	$('.parallax-content').css({
  		'margin-top': (scrollPos/1.5)+"px",
  		'opacity': 1-(scrollPos/250)
  	});
  }
  $(document).ready(function(){
  	$(window).scroll(function() {
  		Parallax();
  	});
  });
}
