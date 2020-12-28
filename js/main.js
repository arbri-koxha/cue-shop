//Script for the scrollable navbar
$(document).scroll(function () {
  var x = $(this).scrollTop();
  var y = $(window).height()/2;
  if (x > y) {
    $("#scrollnav").addClass("display-flex");
    $("#mobile-nav-brand").fadeIn();
    $("#mobile-nav").addClass("dark-background");
  } else {
    $("#scrollnav").removeClass("display-flex");
    $("#mobile-nav-brand").fadeOut();
    $("#mobile-nav").removeClass("dark-background");
  }
})

//Script for the sidebar menu
$("#menu-toggle").click(function (e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});