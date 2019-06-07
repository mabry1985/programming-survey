$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var name = $("#name").val();
    var question1 = parseInt($("#question1").val());
    var question2 = parseInt($("#question2").val());
    var question3 = parseInt($("#question3").val());
    var question4 = parseInt($("#question4").val());

    var match = question1 + question2 + question3 + question4;
    console.log(match);
    if (match < 6) {
      $(".csharp").fadeIn(500);
      $(".javascript, .swift").hide();
    } else if (match < 10) {
      $(".javascript").fadeIn(500);
      $(".csharp, .swift").hide();
    } else if (match < 14) {
      $(".swift").fadeIn();
      $(".javascript, .csharp").hide();
    } else if (match <= 16) {
      $(".swift, .javascript, .csharp").hide();
    } else {
      alert("There was an error, please try again.");
    }






    $(".insert").text(name);

  });
});
