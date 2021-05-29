/* Custom Js*/

/** Slider script */
$('.banner-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 3000,
  });

/** Testimonial Slider */


$('.testi-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    nextArrow:false,
    prevArrow:false
  });

  
  AOS.init({
    once: true
 })

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".menu-bar").addClass("header-fixed");
    } else {
        $(".menu-bar").removeClass("header-fixed");
    }
});

/** Animate text */

var textMotionEl = $('.text-motion');
var word = textMotionEl.text();
var letters = word.split('');

var renderLetters = letters.map(function(letter, i){
  return `<span class="text-letter">${letter}</span>`
})
textMotionEl.html(renderLetters);


var textLetterEl = $('.text-letter');


function setClassEachLetter() {
  textLetterEl.each(function(i){
    var self = $(this);
    var className = (i % 2) === 0 ? "up" : "down"
    setTimeout(function(){
      self.addClass(className);
    }, 100 * i)
  })
}
setClassEachLetter();

// image animate


function slide(){
   $(".service-bg").delay(100).show().animate({opacity: 1, top:"0px"},{duration:1500});
}
$(window).scroll(function() { 

  if ($(window).scrollTop() >=  $("section.services").offset().top - 250) {
    slide();
  }

});
