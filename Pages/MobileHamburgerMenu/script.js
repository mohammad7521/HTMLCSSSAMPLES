// top navigation bar
// top navigation bar
$(document).ready(function () {
  toggleNavbar();
  $(window).resize((event) => {
    if ($(window).width() > 768) {
      $(".nav-list-container").css("display", "flex");
      if ($(".hamburger1").hasClass("active")) {
        $(".hamburger1").removeClass("active");
      }
    }
  });
});

function toggleNavbar() {
  $(".mob-menu").on("click", (event) => {
    $(".hamburger1").toggleClass("active");
    $(".nav-list-container").animate(
      {
        height: "toggle"
      },
      500
    );
  });
}
// --top navigation bar
// --top navigation bar

