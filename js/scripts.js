// User Interface

$(document).ready(function() {
  $("#roboForm").submit(function(event) {
    event.preventDefault();
    let roboFormInput = $("input#roboNumbers").val();
    let robogered = [];
    robogered.push(roboFormInput);
    //I think the two lines of code below (10 & 11) would get added to the for loop on 31 with if/else if statements attached.
    $(".roboSays").show();
    $("#roboResponse").text(roboFormInput);
  }); 
});

//Business Logic  
function beepBoop(rangeStart, rangeStop) {
  let output = "";
//  robogered.map(i, n);
  for (let i = rangeStart; i < rangeStop; i ++) {
    output += i + ',';
    //line 20 "output" puts commas between numbers in range output
  }
  return output;
    // if rogobered.includes(1)  {
    //   return true
    //    console.log("0", "Beep!")
    //  } else if (number === 2) {
    //   console.log("0", "1", "Boop!");
    // } else if (number === 3) {
    //   console.log("0", "1", "2", "Will you be my neighbor?");
    // } else if (number === isNaN) {
    //   console.log("Not. A. Number. Please. Try. Again.");
    // }
    }; 
    
//const beepOutput = "Beep!";
//let beepMe = function(beepOutput) 

//**Better way to do range ? 
// const range = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i);

// range(5, 10);
// test passed





//   if ("#roboResponse" === 1) {
//     return true
//   $("#roboResponse").text("Beep!" + ", ")
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
