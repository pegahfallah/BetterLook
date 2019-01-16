window.onload= function() {
$("name").observe("keyup",nameInput);
$("email").observe("keyup", emailInput);
$("textarea").observe("keyup", textInput);
$("submit").observe("keyup", submitForm);
$("p1").observe("keyup", numberInput);
$("p2").observe("keyup", numberInput);
$("p3").observe("keyup", numberInput2);

}
function correct(element) {
    $(element).removeClassName("incorrect");
    $(element).addClassName("correct");
    $(element).nextElementSibling.innerHTML = "&#10004;";
}
function incorrect(element) {
    $(element).addClassName("incorrect");
    $(element).removeClassName("correct");
    $(element).nextElementSibling.innerHTML = "&#9747;";
}

function textInput(){
if(this.value != ""){
    correct(this);
    }else{
    incorrect(this);
  }
}

function nameInput(){
  var reg = /[a-z]/i;
  if(reg.test($("name").value)==true){
    correct(this);
  }
  else {
    incorrect(this);
  }
}

function emailInput(){
  var reg=/[a-z0-9\_]+[@][a-z]+[.][a-z]+/i; //email regex is muxh more complicated but for now
  if(reg.test($("email").value)==true){
    correct(this);
  }
  else {
    incorrect(this);
  }
}
function numberInput(){
  var reg=/^[0-9][0-9][0-9]$/;
  if(reg.test($(this).value)==true){
    correct(this);
  }
  else {
    incorrect(this);
  }
}
function numberInput2(){
  var reg=/^[0-9][0-9][0-9][0-9]$/;
  if(reg.test($(this).value)==true){
    correct(this);
  }
  else {
    incorrect(this);
  }
}

function submitForm(){
  var message = document.getElementsByClassName("message");
  var t = true;
  for(var i=0; i < message.length; i++)
  {
    if (message[i].innerHTML != "&#10004;")
    {
      t = false;
    }
  }
    if (t) {
      $("myForm").submit();
    }
    else {
        alert("Form Incorrect");
    }
}
