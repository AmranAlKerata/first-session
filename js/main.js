$(function() {
  let didScroll;
  let lastScrollTop = 0;
  let delta = 5;
  let navbarHeight = $("header").outerHeight();
  const navLink = $("header .nav-link");
  const menuIcon = $(".navbar-toggler");

  // Close Sidebar menu when you click on a link
  if (window.innerWidth <= 991) {
    navLink.on("click", () => {
      menuIcon.click();
    });
  }

  // WOW JS
  if ($(".wow").length > 0) {
    new WOW().init();
  }

  // Floating label for textarea
  $(".is-floating-label textarea, .is-floating-label input")
    .on("focus blur", function(e) {
      $(this)
        .parents(".is-floating-label")
        .toggleClass("is-focused", e.type === "focus" || this.value.length > 0);
    })
    .trigger("blur");
  // Hide Header on scroll down

  $(window).scroll(() => {
    didScroll = true;
  });
  setInterval(() => {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    let st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta) return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $("header").removeClass("nav-down").addClass("nav-up");
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $("header").removeClass("nav-up").addClass("nav-down");
      }
    }

    lastScrollTop = st;
  }
  if ($(".owl-carousel").length > 0) {
    const before = $(".before");
    before.owlCarousel({
      loop: true,
      margin: 30,
      autoplay: false,
      dots: false,
      autoplayTimeout: 4000,
      smartSpeed: 600,
      mouseDrag: false,
      touchDrag: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        992: {
          items: 1
        }
      }
    });
    const after = $(".after");
    after.owlCarousel({
      loop: true,
      margin: 30,
      autoplay: false,
      dots: false,
      autoplayTimeout: 4000,
      smartSpeed: 600,
      mouseDrag: false,
      touchDrag: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        992: {
          items: 1
        }
      }
    });
  }

  if ($(".team-swiper").length > 0) {
    new Swiper(".team-swiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        400: {
          slidesPerView: 1,
          centeredSlides: true,
          allowTouchMove: true
        },

        767: {
          slidesPerView: 1,
          allowTouchMove: true
        },
        992: {
          slidesPerView: 1,
          allowTouchMove: false
        },
        1200: {
          slidesPerView: 2,
          allowTouchMove: false
        }
      }
    });
  }
  // Preloader
  setTimeout(() => {
    $(".loader-wrapper").fadeOut("500").queue(function next() {
      this.remove();
    });
    $("body").removeClass("loader-avtive");
  }, 2000);
});
