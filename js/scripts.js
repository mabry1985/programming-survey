$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var name = $("#name").val();
    var question1 = parseInt($("#question1").val());
    var question2 = parseInt($("#question2").val());
    var question3 = parseInt($("#question3").val());
    var question4 = parseInt($("#question4").val());

    var match = question1 + question2 + question3 + question4;

  });
});
