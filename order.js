// const name = document.getElementById('name');
// const surname = document.getElementById('surname');
// const forms = document.getElementById('forms');
// const errorElement = document.getElementById('error');


//function validateForm() {

  let first = document.getElementById("name");
  let last = document.getElementById("surname");
  let date = document.getElementById("date");
  let street = document.getElementById("street");
  let house = document.getElementById("house");
  let flat = document.getElementById("flat");
  let gifts = document.getElementById("gift");
  let form = document.getElementById("form-main");

  let errorMsg = document.getElementsByClassName("error");
  let successIcon = document.getElementsByClassName("success-icon");
  let failureIcon = document.getElementsByClassName("failure-icon");

  let nameInput = document.getElementsByClassName("name-input");
  let onlyLettersRgx = /[^A-Za-z]/;
  //errorMsg[].innerHTML = "adadasdasdasd";



  form.addEventListener("submit", (e)=>{
    e.preventDefault();

        if(first.value.length < 4){
          errorMsg[0].innerHTML = 'not less than 4 letters';
          failureIcon[0].style.opacity = "1";
          successIcon[0].style.opacity = '0';
          return false;
        }

        if(onlyLettersRgx.test(first.value)){
          errorMsg[0].innerHTML = 'write only letters';
          failureIcon[0].style.opacity = "1";
          successIcon[0].style.opacity = '0';
          return false;
        }

        else {
          errorMsg[0].innerHTML = '';
          failureIcon[0].style.opacity = "0";
          successIcon[0].style.opacity = '1';
          return true;
        }

})

form.addEventListener("submit", (e)=>{
    e.preventDefault();

        if(last.value.length < 5){
          errorMsg[1].innerHTML = 'not less than 5 letters';
          failureIcon[1].style.opacity = "1";
          successIcon[1].style.opacity = '0';
          return false;
        }

        if(onlyLettersRgx.test(last.value)){
          errorMsg[1].innerHTML = 'write only letters';
          failureIcon[1].style.opacity = "1";
          successIcon[1].style.opacity = '0';
          return false;
        }

        else {
          errorMsg[1].innerHTML = '';
          failureIcon[1].style.opacity = "0";
          successIcon[1].style.opacity = '1';
          return true;
        }

})

// Date of Delivery validation
form.addEventListener("submit", (e)=>{
    e.preventDefault();

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;


        if(date.value === ''){
          errorMsg[2].innerHTML = 'enter date of delivery';
          return false;
        }

        if(date.value < today){
          errorMsg[2].innerHTML = 'choose date from tomorrow';
          return false;
        }

        else {
          errorMsg[2].innerHTML = '';
          return true;
        }

})

// STREET Name
form.addEventListener("submit", (e)=>{
    e.preventDefault();

        if(street.value.length < 5){
          errorMsg[3].innerHTML = 'not less than 5 symbols';
          failureIcon[2].style.opacity = "1";
          successIcon[2].style.opacity = '0';
          return false;
        }

        else {
          errorMsg[3].innerHTML = '';
          failureIcon[2].style.opacity = "0";
          successIcon[2].style.opacity = '1';
          return true;
        }

})

//HOUSE
form.addEventListener("submit", (e)=>{
    e.preventDefault();

      if (!/^[0-9]+(-[0-9]+)*?$/.test(house.value)) {
          errorMsg[4].innerHTML = 'only positive numbers';
          failureIcon[3].style.opacity = "1";
          successIcon[3].style.opacity = '0';
          return false;
        }

      else{
        errorMsg[4].innerHTML = '';
        failureIcon[3].style.opacity = "0";
        successIcon[3].style.opacity = '1';
        return true;
      }
})

//FLAT
form.addEventListener("submit", (e)=>{
    e.preventDefault();

      if (!/^[0-9]+(-[0-9]+)*?$/.test(flat.value)) {
          errorMsg[5].innerHTML = 'only positive numbers';
          failureIcon[4].style.opacity = "1";
          successIcon[4].style.opacity = '0';
          return false;
        }

      else{
        errorMsg[5].innerHTML = '';
        failureIcon[4].style.opacity = "0";
        successIcon[4].style.opacity = '1';
        return true;
      }
})

// const wrapper = document.querySelector('.wrapper');
// const formMain = wrapper.querySelectorAll('.form-main');
// const submitInput = formMain[0].querySelector('.myButton');
//
//
// function getDataForm(e){
//   e.preventDefault();
//   var formData = new FormData(formMain[0]);
// }
//
// document.addEventListener('DOMContentLoaded', function(){
//   submitInput.addEventListener('click', getDataForm, false);
// }, false);
