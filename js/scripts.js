//Business Logic  
function beepBoop(rangeStart, rangeStop) {
  let output = '';
//  robogered.map(i, n);
  for (let i = rangeStart; i < rangeStop; i ++) {
    output += i + ',';
    //line 20 "output" puts commas between numbers in range output
  }
//  return output;
    if (output.includes(1 || 2 || 3));  {
      console.log("Beep");
//      console.log("Beep!");  //has not passed
  } 
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




// User Interface
$(document).ready(function() {
  $("#roboForm").submit(function(event) {
    event.preventDefault();
    let roboFormInput = $("input#roboNumbers").val();
    let robogered = [];
    robogered.push(roboFormInput);
    //I think the two lines of code below would get added to the for loop on 31 with if/else if statements attached.
    $(".roboSays").show();
    $("#bye-bye-form").hide();
    $("#roboResponse").text(roboFormInput);
  });   
  
  //Robo Says UI
  $("#try-again").click(function(event) {
    $(".roboSays").hide();
    $("#bye-bye-form").show();
    $('input#roboNumbers').val('');
  });
});  


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
