$(document).ready(function(){
//  alert('fuck this noise');
  $("#selector").change(function(event) {
//    alert('got to beginning of form submit');
    var partyinput = $("#selector").val(); //show sections based on party input
//    alert(partyinput + "is the value of partyinput");
    if (partyinput === "Rep") {
      $("#Rep").siblings().hide();
      $("#Rep").show();
    } else if (partyinput === "Dem") {
      $("#Dem").siblings().hide();
      $("#Dem").show();
    } else if (partyinput === "Lib") {
      $("#Lib").siblings().hide();
      $("#Lib").show();
    } else if (partyinput === "Indy") {
      $("#Indy").siblings().hide();
      $("#Indy").show();
    }
    event.preventDefault();
  });
});
