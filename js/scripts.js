// User logic
$(document).ready(function() {
  $("#roboForm").submit(function(event) {
    event.preventDefault();
      let roboFormInput = $("input#roboNumbers").val();
      let robogered = [];
      robogered.push.toString((roboFormInput));
      //I think the two lines of code below (10 & 11) would get added to the for loop on 31 with if/else if statements attached.
      $(".roboSays").show();
      $("#roboResponse").text(roboFormInput);
      
      
 //Business Logic     
//const beepOutput = "Beep!";
//let beepMe = function(beepOutput) 

function beepBoop(number) {
  if (number === 1) {
    console.log("Beep!");
  } else if (number === 2) {
    console.log("Boop!");
  } else if (number === 3) {
    console.log("Will you be my neighbor?");
  } else if (number != 1 || 2 || 3) {
    console.log(number);
  } else if (number === isNaN) {
    console.log("Not. A. Number. Please. Try. Again.");
  }
}

let userInput = false;
for (let i = 0; i < robogered.length; i ++) {
  if (robogered[i] === "1") {
    userInput = true;
    break;
  };
};
}); 
});





//   if ("#roboResponse" === 1) {
//     return true
//   $("#roboResponse").append("Beep!" + ", ")
//   } else if ('roboForm#roboNumbers' === 2) {
//     console.log('roboForm#roboNumbers')
//   }
//   else if ('roboForm#roboNumbers' === 3) {
  //     console.log("Will you be my neighbor?")
//   } else if (formSequence.isNan() {
//     return alert("Not. A. Number. Please. Try. Again.")
//   };
//   };
// });
// })
// }); 
      
  
  
  
  
  
  
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
