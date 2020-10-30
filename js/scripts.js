// User logic
$(document).ready(function() {
  $("#roboForm").submit(function(event) {
    event.preventDefault();
      const roboFormInput = $("input#roboNumbers").val();
      const robogered = [];

//      if (robogered.includes(/\D/)) {
//        $("#roboResponse").prompt("Not. A. Number. Try. A-gain.");
//    } else if 
//     if (roboFormInput.includes(/\d/)) 
        $("#roboResponse").prepend(roboFormInput + ", ");
    
    
    }); 
    
    
    //Business logic
    
    const roboSays = [];


});