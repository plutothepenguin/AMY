text = "HAPPY BIRTHDAY AMY!!!"
num = 14
$('.heart').click(function() {
    $('body').css('background-color', "#ff9aeb");
    setTimeout(function() {
      $('.heart').remove();
      birthdayText();
    }, 1000);
})
function birthdayText() {
  $('.birthday-text').css('display', 'block');
  for (let i = 0; i < text.length; i++) {
    setTimeout(function() {
      $('.birthday-text').html($('.birthday-text').html() + text.charAt(i));
    }, 100*i)
  }
  setTimeout(function() {
    $('.birthday-text').css('color', 'rgba(255,255,255,0)');
    setTimeout(function() {
      $('.birthday-text').remove();
      slideshow();
    }, 1000)
  }, 4000)
}
function slideshow() {
  $('.slideshow').css('display', 'flex');
  $('.slideshow').css('opacity', '1');
  $('.letter-heart').css('display', 'block');

}
$('.right').click(function() {
  num++;
  if (num == 42) {
    num = 1;
  }
  $('.pic').attr('src', "pics/" + num + '.JPEG');
})
$('.left').click(function() {
  num--;
  if (num == 0) {
    num = 41;
  }
  $('.pic').attr('src', "pics/" + num + '.JPEG');
})
let x = 0;
$('.letter-heart').click(function() {
  if (x % 2 == 0) {
    $('.overlay').css('display', 'block');
    x++
  }
  else {
    $('.overlay').css('display', 'none');
    x++
  }
})
