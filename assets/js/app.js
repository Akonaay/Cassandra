$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    item: 3,
    autoplay:true,
    autoplayTimeout: 5000,
    // nav: true
})

$('.portfolio-popup').magnificPopup({
    type: 'image',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function (openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });



  
