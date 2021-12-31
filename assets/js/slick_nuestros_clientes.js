let widthOutput = $(window).width();
    let show_in_slide=5;
    size_of_scream_for_slick();

    window.onresize = reportWindowSize;
    function reportWindowSize() {
      widthOutput = window.innerWidth;
      /*console.log(widthOutput)*/
      size_of_scream_for_slick();
      $('.slider_logos_clientes').slick('slickSetOption', 'slidesToShow', show_in_slide);
    }
 
    function size_of_scream_for_slick(){
      if (widthOutput >=1400) {
      show_in_slide=6;
      
    }
      if (widthOutput <1400) {
      show_in_slide=5;
      
    }
      if (widthOutput <1100) {
      show_in_slide=4;
      
    }
    if (widthOutput <888) {
      show_in_slide=3;
      
    }
    
    if (widthOutput <688) {
      show_in_slide=2;
    }
    }
  

  $('.slider_logos_clientes').slick({
      slidesToShow: show_in_slide,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true
    });