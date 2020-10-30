// User logic
$(document).ready(function() {
  $("#roboForm").submit(function(event) {
    event.preventDefault();
      const roboFormInput = $("input#roboNumbers").val();
//      const robogered = [];

//      if (robogered.includes(/\D/)) {
//        $("#roboResponse").prompt("Not. A. Number. Try. A-gain.");
//    } else if 
//     if (roboFormInput.includes(/\d/)) 
//      if (roboFormInput < '0' && roboFormInput > '50,000') {
//        if (roboFormInput.includes(/\D/)) {
//          alert("Not. A. Number. Try. A-gain.");
      }
      if (roboFormInput >= '0' && roboFormInput <='50,000') {
        $("#roboResponse").prepend(roboFormInput + ", ");
        $("#roboResponse").show();
        console.log(roboFormInput);
      }
    
    
    }); 
    
    
    //Business logic
    
    const roboSays = [];


});