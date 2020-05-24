/* ======= Preloader ======= */

var preloader = document.getElementById('preloader');

function myFunction() {
    preloader.style.display = 'none';
}
/* Hamburger Menu */
function openNav() {
    document.querySelector(".mobile-nav").setAttribute("style", " width:100%");
};
function closeNav() {
    document.querySelector(".mobile-nav").setAttribute("style", " width:0%");
};
/* Modal */
function openModal() {
    document.querySelector(".modal").setAttribute("style", "visibility:visible; width:700px");
};

function closeModal() {
    document.querySelector(".modal").setAttribute("style", " visibility:hidden; width:0px");
};
/* Owl Carousel */

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        slideSpeed: 1000,
        autoplayTimeout: 2000,
          responsive: {
          0 : {
              items: 1
          },
          768 : {
              items: 2
          },
          1000 : {
              items: 2
          },
          1200 : {
              items: 3
          },
          1920 : {
              items: 3
          }
      }
    });
});
/* Type Animation */
$("#typeAnimate").typer({
  strings: [
    "Learn Excilence in Teaching.",
    "Learn Excilence in Designing.",
    "Learn Excilence in Developing."
  ],
    typeSpeed: 100
});