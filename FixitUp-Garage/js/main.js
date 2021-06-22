window.onscroll = function() {myFunction()};

var header = document.getElementById("header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky");
  }
  AOS.init({
    once: true
  })
}

//slider--------------
$(document).ready(function(){

  $('.autoplay').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows : false,
      dots:true,
      fade: true,
    });

    $('.carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows : false,
      dots:true,
      autoplaySpeed: 2000,
    });
});

// nav bar
