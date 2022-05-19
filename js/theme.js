/*          landing page            */

$(document).ready(function() {
     window.setTimeout(landingPage, 0);
})

function preLoad () {
    $("#landing-page").fadeIn(0);
}

function landingPage () {
    $("#landing-logo").delay(0).fadeIn(1600);
    $("#mainform").delay(750).fadeIn(850);
    $("#footer").delay(750).fadeIn(850);
}

/*  End Script  */

/*			Artists Menu - Change class on studio menu link click			*/  

$('.artists-menu-links').click(function() {
    $('.artists-menu-links').removeClass('artists-menu-links-active');
    $(this).addClass('artists-menu-links-active');
});

/*  End Script  */


/*          Main Menu - Change Active on menu link click            */  

$('.js-menu-links').click(function() {
    $('.js-menu-links').removeClass('bold');
    $(this).addClass('bold');
});

/*  End Script  */


/*          Let's Talk - Change Main Menu Active + Scroll Studio top        */  


$('.more-js').click(function() {
    $('#js-studio').scrollTop(0);
    $('.js-menu-links').removeClass('bold');
    $('#contact-link').addClass('bold');
});


/*  End Script  */

/*          Studio Menu - Text Click        */  

$('.studio-menu-text').click(function() {
  $('.studio-menu-text').removeClass('studio-menu-text-active');
  $(this).addClass('studio-menu-text-active');
  $('.studio-menu-bullet').removeClass('studio-menu-bullet-active');
  $(this).next('.teste-2').children().children('.studio-menu-bullet').addClass('studio-menu-bullet-active');
});

/*  End Script  */



/*          Studio Menu - Bullet Click      */  

$('.studio-menu-bullet').click(function() {
  $('.studio-menu-bullet').removeClass('studio-menu-bullet-active');
  $(this).addClass('studio-menu-bullet-active');
  $('.studio-menu-text').removeClass('studio-menu-text-active');
  $(this).parent().parent('.teste-2').prev('.studio-menu-text').addClass('studio-menu-text-active');
});

/*  End Script  */



/*          Menu Principal - Scroll Studio top + Default Text & Bullet      */  

$('.js-menu-links').click(function() {
  $('#js-studio').scrollTop(0);
  $('.studio-menu-bullet').removeClass('studio-menu-bullet-active');
  $('.studio-menu-text').removeClass('studio-menu-text-active');
  $('#studio-menu-bullet-default').addClass('studio-menu-bullet-active');
  $('#studio-menu-text-default').addClass('studio-menu-text-active');
});

/*  End Script  */



/*  End Script  */