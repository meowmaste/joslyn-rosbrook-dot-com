$( function() {
  $(".about-link").click(function(e) {
    e.preventDefault();

    $("#about-wrap").slideToggle();
  });
});
