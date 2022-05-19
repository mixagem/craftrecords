/*$('.ga-start-pt').click(function() {
    gtag('event', 'start-pt', {
      'event_category' : 'Landing',
      'event_label' : 'Landing PT'});
    });
    
    $('#start-en').click(function() {
    gtag('event', 'start-en', {
      'event_category' : 'Landing',
      'event_label' : 'Landing EN'});
    }); */
    
    $('#studio-link').click(function() {
    gtag('event', 'studio', {
      'event_category' : 'Menu',
      'event_label' : 'Studio Page'});
    });
    
    $('#artists-link').click(function() {
    gtag('event', 'artists', {
      'event_category' : 'Menu',
      'event_label' : 'Artists Page'});
    });
    
    $('#video-link').click(function() {
    gtag('event', 'video', {
      'event_category' : 'Menu',
      'event_label' : 'Video Page'});
    });
    
    $('#contact-link').click(function() {
    gtag('event', 'contact', {
      'event_category' : 'Menu',
      'event_label' : 'Contact Page'});
    });
    
    
    $('.ga-studiomenu-1').click(function() {
        gtag('event', 'record', {
          'event_category' : 'Studio',
          'event_label' : 'Recording'});
    });

    $('.ga-studiomenu-2').click(function() {
        gtag('event', 'mixmaster', {
          'event_category' : 'Studio',
          'event_label' : 'Mix & Master'});
    });

    $('.ga-studiomenu-3').click(function() {
        gtag('event', 'prod', {
          'event_category' : 'Studio',
          'event_label' : 'Production'});
    });

    $('.ga-studiomenu-4').click(function() {
        gtag('event', 'rehearsal', {
          'event_category' : 'Studio',
          'event_label' : 'Rehearsal Room'});
    });


    $('.ga-galeria').click(function() {
    gtag('event', 'galeria', {
      'event_category' : 'Nav',
      'event_label' : 'Galeria'});
    });

    $('.more-rehearsal-1').click(function() {
        gtag('event', 'gearlist', {
          'event_category' : 'Nav',
          'event_label' : 'Gearlist download'});
    });
  
    $('.more').click(function() {
        gtag('event', 'more', {
          'event_category' : 'Nav',
          'event_label' : 'Lets Talk'});
    });

    $('.ga-schedule').click(function() {
        gtag('event', 'book', {
          'event_category' : 'Social Link',
          'event_label' : 'Craft Booking (via Contactos)'});
    });

    $('.ga-shop').click(function() {
        gtag('event', 'craftshop', {
          'event_category' : 'Social Links',
          'event_label' : 'Craft Shop (via Contactos)'});
    });

    $('.ga-insta').click(function() {
        gtag('event', 'insta', {
          'event_category' : 'Social Links',
          'event_label' : 'Craft Instagram (via Contactos)'});
    });

    $('.ga-youtube').click(function() {
        gtag('event', 'youtube', {
          'event_category' : 'Social Links',
          'event_label' : 'Craft Youtube (via Contactos)'});
    });
    

    $('.ga-shop-footer').click(function() {
        gtag('event', 'craftshop2', {
          'event_category' : 'Social Links',
          'event_label' : 'Craft Shop (via Rodapé)'});
    });

    $('.ga-book-footer').click(function() {
        gtag('event', 'book2', {
          'event_category' : 'Social Links',
          'event_label' : 'Craft Booking (via Rodapé)'});
    });

    $('.ga-insta-footer').click(function() {
        gtag('event', 'insta2', {
          'event_category' : 'Social Links',
          'event_label' : 'Craft Instagram (via Rodapé)'});
    });

    $('.ga-youtube-footer').click(function() {
        gtag('event', 'youtube2', {
          'event_category' : 'Social Links',
          'event_label' : 'Craft Youtube (via Rodapé)'});
    });