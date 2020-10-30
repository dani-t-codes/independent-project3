// User logic
$(document).ready(function() {
  $("#roboForm").submit(function(event) {
    event.preventDefault();
      const roboFormInput = $("input#roboNumbers").val();
      const robogered = [roboFormInput];
      robogered.forEach(function(roboFormInput) {
        if (roboFormInput >= '0' && roboFormInput <='50,000') {
          $(".goGoRobo").show();
          $("#roboResponse").append(roboFormInput + ", ");
        }
        else if (roboFormInput.includes(1)) {
          $("#roboResponse").replace(roboFormInput("Beep!"))
        }
//      if (robogered.includes(/\D/)) {
//        $("#roboResponse").prompt("Not. A. Number. Try. A-gain.");
//    } else if 
//     if (roboFormInput.includes(/\d/)) 
//      if (roboFormInput < '0' && roboFormInput > '50,000') {
//        if (roboFormInput.includes(/\D/)) {
//          alert("Not. A. Number. Try. A-gain.");
//      }
      
      })
    }); 
    
    
    //Business logic
    
    const roboSays = [];


});