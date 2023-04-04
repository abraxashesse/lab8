$(document).ready(function() {
     var questions = [
          "Q1. What is actually electricity?",
          "Q2. Which of the following disorders is the fear of being alone?",
          "Q3. What is the speed of sound?",
          "Q4. What is the main component of the sun?",
          "Q5. Goulash is a type of beef soup in which country?"
     ];

     var answers = [
          "A flow of electrons",
          "Agoraphobia",
          "1,200 km/h",
          "Gas",
          "Hungary"
     ];

     var choice_options = [
          ["A flow of water", "A flow of air", "A flow of electrons", "A flow of atoms"],
          ["Agoraphobia", "Aerophobia", "Acrophobia", "Arachnophobia"],
          ["120 km/h", "1,200 km/h", "400 km/h", "700 km/h"],
          ["Liquid lava", "Gas", "Molten iron", "Rock"],
          ["Hungary", "Czech Republic", "Slovakia", "Ireland"]
     ];

     for (var i = 0; i < questions.length; i++) {
          var question = $("<div></div>");
          question.text(questions[i]);
          $("#quiz").append(question);

          var options = $("<div></div>");
          for (var j = 0; j < choice_options[i].length; j++) {
               var option = $("<input type='radio' name='question" + i + "' value='" + choice_options[i][j] + "'>" + choice_options[i][j] + "</input>");
               options.append(option);
          }
          $("#quiz").append(options);
     }

     $("#submit").click(function() {
          var selected = [];
          for (var i = 0; i < questions.length; i++) {
               var answer = $("input[name='question" + i + "']:checked").val();
               selected.push(answer);
          }

          var score = 0;
          for (var i = 0; i < selected.length; i++) {
               if (selected[i] == answers[i]) {
                    score++;
               }
          }

          $("#score").text("Your score: " + score + " out of " + questions.length);
     });
});