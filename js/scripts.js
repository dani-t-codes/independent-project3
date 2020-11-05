// User logic
$(document).ready(function() {
  $("#roboForm").submit(function(event) {
    event.preventDefault();
      let roboFormInput = $("input#roboNumbers").val();
      let robogered = [];
      robogered.push(roboFormInput);
      $(".roboSays").show();
      $("#roboResponse").append(roboFormInput + ", ");
      
 //Business Logic     
//const beepOutput = "Beep!";
//let beepMe = function(beepOutput) 
let formFlag = false;
for (let i = 0; i < robogered.length; i ++) {
  if (robogered[i] === "1") {
    formFlag = true;
    console.log(true);
    break;
  };
};
}); 
});
//   else if (formSequence.isNan() {
//     return alert("Not. A. Number. Please. Try. Again.")
//   };
//   };
// });



  //   if ("#roboResponse" === 1) {
  //     return true
  // //        $("#roboResponse").append("Beep!" + ", ")
  //   }
  //   else if ('roboForm#roboNumbers' === 2) {
  //     console.log('roboForm#roboNumbers')
  //   }
  //   else if ('roboForm#roboNumbers' === 3) {
  //     console.log("Will you be my neighbor?")
  //   }
  // })
  // }); 

  
  
  //Business logic
  
  //    const roboSays = [];
  
  
  
  
  
  
  
  
  //Extras
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
    //  });
