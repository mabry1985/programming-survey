$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var name = $("#name").val();
    var question1 = parseInt($("#question1").val());
    var question2 = parseInt($("#question2").val());
    var question3 = parseInt($("#question3").val());
    var question4 = parseInt($("#question4").val());
    var question5 = parseInt($("#question5").val());

    var match = question1 + question2 + question3 + question4 + question5;

    if (match < 6) {
      $(".csharp").fadeIn(500);
      $(".javascript, .swift, .main-image").hide();
    } else if (match < 10) {
      $(".javascript").fadeIn(500);
      $(".csharp, .swift, .main-image").hide();
    } else if (match < 14) {
      $(".swift").fadeIn();
      $(".javascript, .csharp .main-image").hide();
    } else if (match <= 16) {
      $(".swift, .javascript, .csharp, .main-image").hide();
      $(".wtf").fadeIn();
    } else if (match > 16) {
      $(".container").hide();
      $("body").addClass("black");
      $(".trippy").fadeIn(5000);
      $(".meow").fadeIn(6500);
      var music = document.createElement('audio');
       music.setAttribute('src', 'audio/sitar.wav');
       music.play();
    }
     else {
      alert("Please answer all of the questions!");
    }
    $(".insert").text(name);
  });

  $(".meow").mouseenter(function() {
    var meow = document.createElement('audio');
   meow.setAttribute('src', 'audio/meow.wav');
   meow.play();
  });

});
