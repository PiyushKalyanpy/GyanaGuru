$("document").ready(function () {
  $('input[type="text"], input[type="email"], textarea').focus(function () {
    var background = $(this).attr("id");
    $("#" + background + "-form").addClass("formgroup-active");
    $("#" + background + "-form").removeClass("formgroup-error");
  });
  $('input[type="text"], input[type="email"], textarea').blur(function () {
    var background = $(this).attr("id");
    $("#" + background + "-form").removeClass("formgroup-active");
  });

  function errorfield(field) {
    $(field).addClass("formgroup-error");
    console.log(field);
  }

  $("#waterform").submit(function () {
    var stopsubmit = false;

    if ($("#name").val() == "") {
      errorfield("#name-form");
      stopsubmit = true;
    }
    if ($("#email").val() == "") {
      errorfield("#email-form");
      stopsubmit = true;
    }
    if (stopsubmit) return false;
  });
});
