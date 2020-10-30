// User logic
$(document).ready(function() {
  $("#roboForm").submit(function(event) {
    event.preventDefault();
      const roboFormInput = $("input#roboNumbers").val();
      $("#roboResponse").prepend(roboFormInput + ", ");
    }); 
    
    
    //Business logic
    
    const roboSays = [];


});