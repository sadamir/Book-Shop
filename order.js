// const name = document.getElementById('name');
// const surname = document.getElementById('surname');
// const forms = document.getElementById('forms');
// const errorElement = document.getElementById('error');


function validateForm() {

  let first = document.forms["regform"]["name"].value;
  let last = document.forms["regform"]["surname"].value;
  let date = document.forms["regform"]["date"].value;
  let street = document.forms["regform"]["street"].value;
  let house = document.forms["regform"]["house"].value;
  let flat = document.forms["regform"]["flat"].value;
  let payment = document.forms["regform"]["payment"].value;
  let gift = document.getElementById("gift");





// firstname validation

    if(first === ""){
      alert("enter the name");
       return false;
    }
    if(!isNaN(first)){
      alert("name should be in character");
      return false;
    }
    // if (first.value.length < 4) {
    //   alert("enter the name");
    //     return false;
    //   }
    // if (/[^A-Za-z]/.test(first.value)) {
    //     alert("enter the name");
    //     return false;
    // }






// lastname validation
  if(last === ""){
    alert("enter the surname");
     return false;
  }
  if(!isNaN(last)){
    alert("surname should be in character");
    return false;
  }

// Date of Delivery validation
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;


    if(date === ""){
      alert("enter date");
      return false;
    }

    if (date < today) {
    alert("delivery time can be done anytime from tomorrow");
    return false;

    }

    // Street validation
    if (street === "") {
    alert("enter street");
    return false;
    }

    if (house === "") {
      alert("enter house");
      return false;
    }

    if (payment === ""){
      alert("select payment");
      return false;
    }

    if (!gift.checked) {
      alert("choose 2 gifts")
      return false;
    }
}







// name.addEventListener('input', (e) => {
//   let letters = /^[A-Za-z]+$/;
//   let messages = [];
//   if (name.value === '' || name.value === null){
//     messages.push('Name is required')
//   }
//   else if (name.value.match(letters) && name.value.length > 3) {
//     return true;
//   }
//   else if (messages.length > 0) {
//     e.preventDefault();
//     errorElement.innerText = messages.join(', ')
//   }
// })
