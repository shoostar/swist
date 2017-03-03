// Widows
$('p').each(function() {
  $(this).html($(this).html().replace(/\s([^\s<]+)\s*$/,'&nbsp;$1'));
});



// Simple parallax background
$(window).scroll(function(){
  $('.parallax').css('background-position','center calc(50% + '+($(window).scrollTop()*0.25)+'px');
});
