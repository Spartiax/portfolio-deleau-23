/* MENU */
$('.menu').on('click', '.menu-icon:not(.menu-close)', function() {
    menuOpen();
  });
  $('.menu').on('click', '.menu-close', function() {
    menuClose();
  });
  $('.overlay').on('click', function() {
    menuClose();
  });
  TweenMax.to('.overlay', 0, {
    autoAlpha: 0
  });
  
  function menuOpen() {
    $('.menu-icon').addClass('menu-close');
    TweenMax.to('.menu-bg', 1, {
      scale: 16,
      ease: Expo.easeInOut
    });
    TweenMax.to('.overlay', 0.4, {
      autoAlpha: 1,
      delay: 0.6
    });
    TweenMax.to('.block', 1, {
      autoAlpha: 0.4
    });
  };
  
  function menuClose() {
    $('.menu-icon').removeClass('menu-close');
    TweenMax.to('.menu-bg', 1, {
      scale: 1,
      ease: Expo.easeInOut
    });
    TweenMax.to('.overlay', 0.4, {
      autoAlpha: 0,
      overwrite: true
    });
    TweenMax.to('.block', 1, {
      autoAlpha: 1
    });
  };
  
  $(document).on('click', '.menu-list a', function(event) {
    event.preventDefault();
    var href = $.attr(this, 'href');
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500, function() {
      window.location.hash = href;
    });
  });
  /* END MENU */

  const items = document.getElementsByClassName('menu-items');
  const mymenu = document.getElementsByClassName('menu');
  let isActive = false;

  mymenu[0].addEventListener("click", function() {
    for (let i = 0; i < items.length; i++) {
        !isActive ?
        items[i].classList.add('menu-items-active') : 
        items[i].classList.remove('menu-items-active');
    }
    isActive = !isActive;
  });
  console.log(items, mymenu);


