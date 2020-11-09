//Business Logic  
function beepBoop(n) {
    for (let i=0; i <= n; i ++) {
      if ((i == 3)|| (i.has(3))) {
          console.log('Will you be my neighbor?');
        } else if (i == 2) {
          console.log('Boop!');
      } else if (i ==1) {
          console.log('Beep!');
      } else {
          console.log(i);
      }
    }
  }
  // let robogered = [];
  // let x = 1;
  // let y = 2;
  // let z = 3;

  // for (let i = 0; i <= n; i ++) {
  //   robogered.push(i); 
  // };
  //   //robogered.toString(i);
  //   return robogered; 

  //   function beepBoopToString(max) {
  //     return robogered.toString();
  //   }
  // };
  // } if (robogered.includes((3) || (3 && 2) || (3 && 1))) {
  //   String.replaceAll("Will you be my neighbor?");
  //   if (robogered.includes('1'))  {
  //     function beepIt {
  //     String.replaceAll('1', 'Beep!');
  //   }
  // };
    // } else if (robogered.includes((2) || (2 && 1))) {
    //   String.replaceAll('2', "Boop!");
      // } else {
      //       console.log(i);
      // }
    
    
    if (i.has(3))
      return true;


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
