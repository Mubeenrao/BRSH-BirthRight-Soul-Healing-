// Sticky Header
jQuery(document).ready(function(e) {
  var n = 0,
  i = e("header");

  e(window).scroll(function() {
    var t = e(this).scrollTop();
    t > 0 ? i.addClass("sticky_header") : i.removeClass("sticky_header");
    
    if (Math.abs(t - n) > 10) {
      if (t > n && t > 100) {
        i.addClass("hidden_header");
      } else {
        i.removeClass("hidden_header");
      }
      n = t;
    }
  });
});

// Humberg Menu
$(function() {
  $("#toggle_menu_btn").click(function() {
    $(this).toggleClass("active");
    $(".menu_drawer").slideToggle();
    $(".overlay").toggleClass("visible");

    // Disable body scroll when overlay is visible
    if ($(".overlay").hasClass("visible")) {
      $("body").addClass("no-scroll");
    } else {
      $("body").removeClass("no-scroll");
    }
  });

  $("#toggleSarch").click(function() {
    $(".header_search").toggleClass("showSearch");
    $(".overlay").toggleClass("visible");

    // Disable body scroll when overlay is visible
    if ($(".overlay").hasClass("visible")) {
      $("body").addClass("no-scroll");
    } else {
      $("body").removeClass("no-scroll");
    }

  });

  $("#profileBtn").click(function() {
    $(".profile_dropdown").slideToggle();
    $(".overlay").toggleClass("visible");

    // Disable body scroll when overlay is visible
    if ($(".overlay").hasClass("visible")) {
      $("body").addClass("no-scroll");
    } else {
      $("body").removeClass("no-scroll");
    }

  });

  // Close menu when clicking on overlay
  $(".overlay").click(function() {
    $("#toggle_menu_btn").removeClass("active"); // Reset the button state
    $(".menu_drawer").slideUp(); // Hide the menu drawer
    $(".profile_dropdown").slideUp(); // Hide the Profile Dropdown
    $(".overlay").removeClass("visible"); // Hide the overlay
    $("body").removeClass("no-scroll"); // Enable body scrolling
    $(".header_search").removeClass("showSearch");
  });
});

// Shop Swiper
var swiper = new Swiper(".shop_swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // 640: {
    //   slidesPerView: 2,
    //   spaceBetween: 10,
    //   centeredSlides: true,
    // },
    767: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper(".main_swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});





var swiper = new Swiper(".profile_swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".blog_swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


$(document).ready(function () {
  $(".accordion-header").on("click", function () {
    // Close all other accordion items
    $(".accordion-content").slideUp();
    $(".accordion-header").removeClass("active"); // Remove active class from all headers
    $(".arrow").removeClass("rotate");

    // Toggle the clicked accordion item
    if (!$(this).next(".accordion-content").is(":visible")) {
      $(this).next(".accordion-content").slideDown();
      $(this).find(".arrow").addClass("rotate");
      $(this).addClass("active"); // Add active class to the clicked header
    }
  });
});




// Jquery Tabs
$(document).ready(function() {
  $('.tab').click(function() {
    const tabId = $(this).data('tab');

    // Remove 'active' class from all tabs and contents
    $('.tab').removeClass('active');
    $('.shop_tab_content').removeClass('active');

    // Add 'active' class to the clicked tab and corresponding content
    $(this).addClass('active');
    $('#tab-' + tabId).addClass('active');
  });
});


// Show Hide Password
$(document).ready(function () {
  $(".togglePassword").click(function () {
    const passwordField = $(this).siblings(".passwordField");
    const isPassword = passwordField.attr("type") === "password";

    // Toggle the input type
    passwordField.attr("type", isPassword ? "text" : "password");

    // Toggle the button image
    const img = $(this).find("img");
    img.attr("src", isPassword ? "images/hide.svg" : "images/hide.svg");
    img.attr("alt", isPassword ? "Hide Password" : "Show Password");
  });
});

///////////////////////////////////////
var buttonPlus  = $(".qty-btn-plus");
var buttonMinus = $(".qty-btn-minus");

var incrementPlus = buttonPlus.click(function() {
  var $n = $(this)
  .parent(".qty-container")
  .find(".input-qty");
  $n.val(Number($n.val())+1 );
});

var incrementMinus = buttonMinus.click(function() {
  var $n = $(this)
  .parent(".qty-container")
  .find(".input-qty");
  var amount = Number($n.val());
  if (amount > 0) {
    $n.val(amount-1);
  }
});


///////////////////////////////////////////////

var galleryThumbs = new Swiper(".gallery-thumbs", {
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: 2,
    spaceBetween: 10,
    direction: 'horizontal',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
    768: {
      direction: 'horizontal',
      slidesPerView: 3,
    },
    1279: {
      direction: 'vertical',
    },
  },
});

var galleryMain = new Swiper(".gallery-main", {
    preventInteractionOnTransition: true,
    effect: 'fade',
      fadeEffect: {
      crossFade: true
    },
    thumbs: {
      swiper: galleryThumbs
    }
});

galleryMain.on('slideChangeTransitionStart', function() {
    galleryThumbs.slideTo(galleryMain.activeIndex);
});

galleryThumbs.on('transitionStart', function(){
    alleryMain.slideTo(galleryThumbs.activeIndex);
});