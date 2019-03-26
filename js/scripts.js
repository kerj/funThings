$(document).ready(function()  {
  $("#clickable1").click(function() {
    $("#fadeIt").fadeToggle();
  });

  $("#clickable2").click(function() {
    $("#slideIt").fadeToggle();
  });

  $("#clickable3").click(function() {
    $("#appearIt").fadeToggle();
  });
});
