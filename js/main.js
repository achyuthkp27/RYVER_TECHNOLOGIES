!(function (e) {
  "use strict";
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
  }),
    e(window).scroll(function () {
      e(this).scrollTop() > 100
        ? e(".back-to-top").fadeIn("slow")
        : e(".back-to-top").fadeOut("slow");
    }),
    e(".back-to-top").click(function () {
      return (
        e("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo"), !1
      );
    });
  var t = e(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
  });
  e("#portfolio-flters li").on("click", function () {
    e("#portfolio-flters li").removeClass("active"),
      e(this).addClass("active"),
      t.isotope({ filter: e(this).data("filter") });
  }),
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
    e(".team-carousel").owlCarousel({
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
      responsive: {
        0: { items: 1 },
        576: { items: 1 },
        768: { items: 2 },
        992: { items: 3 },
      },
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
    }),
    (document.getElementById("contact-details-js").innerHTML +=
      '<div class="container-fluid py-5 bg-primary"> <div class="container pb-3"> <div class="row"> <div class="col-lg-4 mb-2"> <div class="d-flex align-items-center bg-dark rounded mb-4 px-5 contact-box" style="height: 150px;"> <i class="fa fa-3x fa-map-marker-alt text-primary mr-3"></i> <div class="d-flex flex-column"> <h5 class="text-uppercase text-primary">Our Office</h5> <p class="m-0 text-light">BS Saroja Nilayam FN.401,Bhagya Nagar colony KPHB, Hyderabad-500072</p> </div> </div> </div> <div class="col-lg-4 mb-2"> <div class="d-flex align-items-center bg-dark rounded mb-4 px-5 contact-box" style="height: 150px;"> <i class="fa fa-3x fa-envelope-open text-primary mr-3"></i> <div class="d-flex flex-column"> <h5 class="text-uppercase text-primary">Email Us</h5> <p class="m-0 text-light">tech.ryver@gmail.com</p> </div> </div> </div> <div class="col-lg-4 mb-2"> <div class="d-flex align-items-center bg-dark rounded mb-4 px-5 contact-box" style="height: 150px;"> <i class="fas fa-3x fa-phone-alt text-primary mr-3"></i> <div class="d-flex flex-column"> <h5 class="text-uppercase text-primary">Call Us</h5> <p class="m-0 text-light">+91 93805 15942</p> </div> </div> </div> </div> </div> </div>');
  document.getElementById("after-footer").innerHTML +=
    '<!-- Back to Top -->    <a href="#" class="btn btn-lg btn-primary-dark btn-lg-square back-to-top"><i class="fa fa-angle-up"></i></a>    <!-- JavaScript Libraries -->    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>    <script src="https://cdn.jsdelivr.net/gh/achyuthkp27/RYVER_TECHNOLOGIES/lib/easing/easing.min.js"></script>    <script src="https://cdn.jsdelivr.net/gh/achyuthkp27/RYVER_TECHNOLOGIES/lib/waypoints/waypoints.min.js"></script>    <script        src="https://cdn.jsdelivr.net/gh/achyuthkp27/RYVER_TECHNOLOGIES/lib/owlcarousel/owl.carousel.min.js"></script>    <script src="https://cdn.jsdelivr.net/gh/achyuthkp27/RYVER_TECHNOLOGIES/lib/isotope/isotope.pkgd.min.js"></script>    <script src="https://cdn.jsdelivr.net/gh/achyuthkp27/RYVER_TECHNOLOGIES/lib/lightbox/js/lightbox.min.js"></script>';
})(jQuery);
