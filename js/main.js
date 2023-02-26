!(function (e) {
  "use strict";
  new Swiper(".events-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });
  e(document).ready(function () {
    function t() {
      e(window).width() > 992
        ? e(".navbar .dropdown")
            .on("mouseover", function () {
              e(".dropdown-toggle", this).trigger("click");
            })
            .on("mouseout", function () {
              e(".dropdown-toggle", this).trigger("click").blur();
            })
        : e(".navbar .dropdown").off("mouseover").off("mouseout");
    }
    t(), e(window).resize(t);
  });
  e(".slide-one-item").length > 0 &&
    e(".slide-one-item").owlCarousel({
      items: 1,
      autoplay: !0,
      smartSpeed: 1e3,
      margin: 30,
      dots: !1,
      loop: !0,
      nav: !0,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>',
      ],
    }),
    e(".testimonial-carousel").owlCarousel({
      autoplay: !0,
      smartSpeed: 1500,
      margin: 30,
      dots: !0,
      loop: !0,
      center: !0,
      responsive: {
        0: { items: 1 },
        576: { items: 1 },
        768: { items: 2 },
        992: { items: 3 },
      },
    });
})(jQuery);
