//Business Logic  
function beepBoop(roboInput) {
  let roboArray = [];
  for (let i = 0; i <= roboInput; i++) {
    if (i.toString().includes('3')) {
      roboArray.push("Won't you be my neighbor?" + ' ');
    } else if (i.toString().includes("2")) {
      roboArray.push('Boop!' + ' ');
    } else if (i.toString().includes("1" )) {
      roboArray.push('Beep!' + ' ');
    } else {
      roboArray.push(i + ' ');
    }
  }
  return roboArray;  
};

//Form User Interface
$(document).ready(function() {
  $("#roboForm").submit(function(event) {
    event.preventDefault();
    let roboInput = parseInt($("input#robo-numbers").val());
    let roboOutput = beepBoop(roboInput);
    //form submit actions
    $(".roboSays").show();
    $("#bye-bye-form").hide();
    $("#roboResponse").text(roboOutput);   
    //Robo Says UI
    $("#try-again").click(function() {
      $(".roboSays").hide();
      $("#bye-bye-form").show();
      $('input#robo-numbers').val('');
    });   
  });
});  