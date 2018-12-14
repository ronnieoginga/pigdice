

$(document).ready(function(){
  $("form #btn").click(function(){
    var answer1 = $("input:radio[name=q1]:checked").val();
    var answer2 = $("input:radio[name=q2]:checked").val();
    var answer3 = $("input:radio[name=q3]:checked").val();
    var answer4 = $("input:radio[name=q4]:checked").val();

    var score = 0;
    var points = 25;

    if(answer1 == "25"){
      score+=points;
    }

    if(answer2 == "25"){
      score+=points;
    }

    if(answer3 == "25"){
      score+=points;
    }

    if(answer4 == "25"){
      score+=points;
    }
    if (score == 0) {
      $("#score").html("Your score is " + score + "/100. You didn't study at all<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFX0ucphlkiFj9d_KemB6h_s2HRLbQXmvRS34e28bBiE0uyRxT4w' width='300' />");
    }
    else if (score == 25) {
        $("#score").html("Your score is " + score + "/100. You need to spend more time. Try again.<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfItEPBDTUkbFMSfjAmEemTyqlZcZ4EJDi5PP85LRiPNwxzZXtFw' width='300' />");

    }
    else if (score == 50) {
        $("#score").html("Your score is " + score + "/100. So close .Try again<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRitHYC9cO9WMVwDR8C16TzcEBlK2TRDA7rzixIP60OyayAYEB' width='300' />");

    }
    else if (score == 75) {
            $("#score").html("Your score is " + score + "/100. You didn't study at all<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv1--oKZGMK30GgfEIu4cy223m2KHr3dQkq1onNfmgIrQrMi7X' width='300' />");
    }
    else if (score == 100) {
            $("#score").html("Your score is " + score + "/100. Excellent! You're a JavaScript pro!<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzrkM1Izbwg_KChTNZnFQqDHD7hKD-D-zqama5T1dcLTZirPUu' width='300' />");
    }
  $( "form#myForm" ).slideUp(1000)
    $("#score" ).show(fast)
  });
 });
