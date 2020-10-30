// User logic
$(document).ready(function() {
  $("#roboForm").click(function(event) {
    event.preventDefault();
      const roboFormInput = $("input#roboForm").val();
      const roboSays = [];
      $("#roboResponse").prepend(roboFormInput + ", ");
  }); 


//Business logic
  


});