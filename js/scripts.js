// User logic
$(document).ready(function() {
  $("#roboForm").submit(function(event) {
    event.preventDefault();
      let roboFormInput = $("input#roboNumbers").val();
      let robogered = [];
        robogered.push(roboFormInput);
        $(".roboSays").show();
        $("#roboResponse").append(roboFormInput + ", ");
//      const beepBoop = function()
      
//      roboFormInput.push([robogered]);

      robogered.forEach(function(roboFormInput) {
        console.log(roboFormInput);
        if (roboFormInput === 1) {
//        $("#roboResponse").append("Beep!" + ", ")
        }
        else if ('roboForm#roboNumbers' === 2) {
          console.log('roboForm#roboNumbers')
        }
        else if ('roboForm#roboNumbers' === 3) {
          console.log("Will you be my neighbor?")
        }
        
      });
    }); 
  });
  
  
  //Business logic
  
  //    const roboSays = [];
  
  
  
  
  
  
  
  
  //Testing
  //if (roboFormInput >= '0' && roboFormInput <='50,000') {
    //  $(".roboSays").show();
    //  
    //}


    //      if (robogered.includes(/\D/)) {
    //        $("#roboResponse").prompt("Not. A. Number. Try. A-gain.");
    //    } else if 
    //     if (roboFormInput.includes(/\d/)) 
    //      if (roboFormInput < '0' && roboFormInput > '50,000') {
    //        if (roboFormInput.includes(/\D/)) {
    //          alert("Not. A. Number. Try. A-gain.");
    //      }