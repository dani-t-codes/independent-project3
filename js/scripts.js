// User logic
$(document).ready(function() {
  $("#roboForm").submit(function(event) {
    event.preventDefault();
      const roboFormInput = $("input#roboNumbers").val();

      if ("roboFormInput").includes(/\D/) {
        $("#roboForm").alert("Try again! That's not a number.");
      else if ("roboFormInput").includes(/\d/)
        $("#roboResponse").prepend(roboFormInput + ", ");
      }
    }); 
    
    
    //Business logic
    
    const roboSays = [];


});