(function ($) {
  "use strict";

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Portfolio isotope and filter
  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });
  $("#portfolio-flters li").on("click", function () {
    $("#portfolio-flters li").removeClass("active");
    $(this).addClass("active");

    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });

  if ($(".slide-one-item").length > 0) {
    $(".slide-one-item").owlCarousel({
      items: 1,
      autoplay: true,
      smartSpeed: 1000,
      margin: 30,
      dots: false,
      loop: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      ],
    });
  }

  // Team carousel
  $(".team-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 30,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  /* accordion
   * ------------------------------------------------------ */
  const ssAccordion = function () {
    const $allItems = $(".services-list__item");
    const $allPanels = $allItems.children(".services-list__item-body");

    $allPanels.slice(1).hide();

    $allItems.on("click", ".services-list__item-header", function () {
      const $this = $(this),
        $curItem = $this.parent(),
        $curPanel = $this.next();

      if (!$curItem.hasClass("is-active")) {
        $allPanels.slideUp();
        $curPanel.slideDown();
        $allItems.removeClass("is-active");
        $curItem.addClass("is-active");
      }

      return false;
    });
  };

  document.getElementById("contact-details-js").innerHTML +=
    '<div class="container-fluid py-5 bg-primary"> <div class="container pb-3"> <div class="row"> <div class="col-lg-4 mb-2"> <div class="d-flex align-items-center bg-dark rounded mb-4 px-5 contact-box" style="height: 150px;"> <i class="fa fa-3x fa-map-marker-alt text-primary mr-3"></i> <div class="d-flex flex-column"> <h5 class="text-uppercase text-primary">Our Office</h5> <p class="m-0 text-light">BS Saroja Nilayam FN.401,Bhagya Nagar colony KPHB, Hyderabad-500072</p> </div> </div> </div> <div class="col-lg-4 mb-2"> <div class="d-flex align-items-center bg-dark rounded mb-4 px-5 contact-box" style="height: 150px;"> <i class="fa fa-3x fa-envelope-open text-primary mr-3"></i> <div class="d-flex flex-column"> <h5 class="text-uppercase text-primary">Email Us</h5> <p class="m-0 text-light">tech.ryver@gmail.com</p> </div> </div> </div> <div class="col-lg-4 mb-2"> <div class="d-flex align-items-center bg-dark rounded mb-4 px-5 contact-box" style="height: 150px;"> <i class="fas fa-3x fa-phone-alt text-primary mr-3"></i> <div class="d-flex flex-column"> <h5 class="text-uppercase text-primary">Call Us</h5> <p class="m-0 text-light">+012 345 6789</p> </div> </div> </div> </div> </div> </div>';
})(jQuery);
