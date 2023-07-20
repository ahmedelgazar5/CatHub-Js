
// formvalidation

var inputs = document.getElementsByTagName("input");
var name1 = document.getElementById("name");
var email = document.getElementById("email1");
var pass = document.getElementById("pass");
var phone = document.getElementById("phone");
var country = document.getElementById("country");






function validName() {
  if (inputs[0].value.length <= 3 || !isNaN(Number(inputs[0].value))) {
    name1.style.visibility = "visible";
    inputs[0].style.boxShadow ='inset 1px 1px 1px 1px rgb(228,55,55)'
    return false;
  }
  name1.style.visibility = "hidden";
  inputs[0].style.boxShadow ='inset 1px 1px 1px 1px rgb(0,150, 0)'
  return true;
}

var regEmail = /^[a-zA-Z0-9]+\@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
function validEmail() {
    if (regEmail.test(inputs[1].value)) {
        email.style.opacity = 0;
        inputs[1].style.boxShadow ='inset 1px 1px 1px 1px rgb(0,150, 0)'
        return true;
    }
    email.style.opacity = 1;
    inputs[1].style.boxShadow ='inset 1px 1px 1px 1px rgb(228,55,55)'
  return false;
}

function validPass() {
  if (inputs[2].value.length < 8) {
    pass.style.opacity = 1;
    inputs[2].style.boxShadow ='inset 1px 1px 1px 1px rgb(228,55,55)'
    return false;
  }
  pass.style.opacity = 0;
  inputs[2].style.boxShadow ='inset 1px 1px 1px 1px rgb(0,150, 0)'
  return true;
}

function validPhone() {
  if (inputs[3].value.length < 11 || isNaN(Number(inputs[3].value))) {
    phone.style.opacity = 1;
    inputs[3].style.boxShadow ='inset 1px 1px 1px 1px rgb(228,55,55)'
    return false;
  }
  phone.style.opacity = 0;
  inputs[3].style.boxShadow ='inset 1px 1px 1px 1px rgb(0,150, 0)'
  return true;
}



var list1 = document.getElementsByTagName("select")[0];
function validCountry() {
  if (list1.selectedIndex == 0) {
    country.style.opacity = 1;
    list1.style.boxShadow ='inset 1px 1px 1px 1px rgb(228,55,55)'
    return false;
  }
  console.log('lssdd');
  country.style.opacity = 0;
  list1.style.boxShadow ='inset 1px 1px 1px 1px rgb(0,150, 0)'
  return true;
}



let formValid = document.getElementById('formValid')
function mySubmit(e) {
  e.preventDefault();
  if (validName() == true &&validEmail() && validPass() && validPhone() && validCountry() )  {
    e.target.submit();
  }else{
    formValid.classList.remove('opacity-0')
  }
}