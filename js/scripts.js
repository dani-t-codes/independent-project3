//Business Logic  
function beepBoop(roboInput) {
  let roboArray = [];
  for (let i = 0; i <= roboInput; i++) {
    if (i.toString().includes('3')) {
      roboArray.push("Won't you be my neighbor?");
    } else if (i.toString().includes("2")) {
      roboArray.push('Boop!');
    } else if (i.toString().includes("1")) {
      roboArray.push('Beep!');
    } else {
      roboArray.push(i);
    }
    return roboArray;
  }

//Form User Interface
$(document).ready(function() {
  $("#roboForm").submit(function(event) {
    event.preventDefault();
    let roboInput = parseInt($("#robo-numbers").val());
    let roboOutput = beepBoop(roboInput);
    //robogered.push(nums);
    $(".roboSays").show();
    $("#bye-bye-form").hide();
    $("#roboResponse").text(roboOutput);
  });   
  
  //Robo Says UI
  $("#try-again").click(function(event) {
    $(".roboSays").hide();
    $("#bye-bye-form").show();
    $('input#robo-numbers').val('');
  });
});  
};

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

// function beepBoop(n) {
//   let robogered = [];
//   robogered.push(i); 
//   let finalOutput = [];

//   for (let i=0; i <= n; i ++) {
//     if (robogered.includes(3)) {
//         finalOutput.push("Will you be my neighbor?");
//     } else if (robogered.includes(2)) {
//         finalOutput.push("Boop!");
//     } else if (robogered.includes(1)) {
//         finalOutput.push("Beep!");
//     } else {
//         finalOutput.push(n);
//     }
// };
// const finalString = finalOutput.join("");
// };

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