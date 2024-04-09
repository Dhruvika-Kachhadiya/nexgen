$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });


$(document).ready(function(){
    $('#banner_slider').owlCarousel({
        items:1,
        nav:false,
        dots:true,
    })


    var owl = $('#banner_slider');
    owl.owlCarousel();
    owl.on('changed.owl.carousel', function(event) {
        new WOW().init();
    })

    wow = new WOW(
              {
              boxClass:     'wow',      // default
              animateClass: 'animated', // default
              offset:       0,          // default
              mobile:       true,       // default
              live:         true        // default
            }
            )
    wow.init();

    $('#blog_slider').owlCarousel({
        loop:true,
        items:3,
        nav:false,
        dots:false,
    })

    var btn = $('#top_scroll');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


var counted = 0;
$(window).scroll(function() {

  var oTop = $('#cnt').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});
$(document).ready(function(){
    setTimeout(function() {
      $('.pre_loader').fadeOut();
    },3000);
  })


})
