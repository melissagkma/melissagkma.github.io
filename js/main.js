/*$('.mainNav a').click(
  function(){
    $('.content-box').addClass('hide')
    $( $(this).attr('href') ).removeClass('hide')
  }
)

$('.btn-close').click(
  function(){
    $(this).closest('.content-box').addClass('hide')
  }
)*/

$('.start').click(
  function(){
    $('.start').hide();
    $('.background').show();
  }
)

$('.mainNav a').click(
  function(){
    //$('.content-box').fadeOut(500);
    $( $(this).attr('href') ).fadeIn(750);
  }
)

$('.btn-close').click(
  function(){
    $(this).closest('.content-box').fadeOut(500);
  }
)
