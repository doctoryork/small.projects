const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


//SHOW INPUT ERROR MESSAGE
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}
//show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}


function checkEmail(input) 
    {
        const re = /\S+@\S+\.\S+/;
        if(re.test(input.value.trim())) {
          showSuccess(input);

        } else {
          showError(input, 'Email is not valid');
        }
    }

//СCheck requiered fields
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if(input.value.trim() === '') {
      showError(input, `${getFeildName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//check inpiut length
function checkLength(input, min, max) {
  if(input.value.length < min) {
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);


  } else if (input.value.length > max) {
    showError(input, `${getFeildName(input)} must be less than ${max} characters`);
  } else { showSuccess(input);
  }
}

//Check passwords match

function checkPasswordMatch(input1, input2) {
  if(input1.value !== input2.value ) {
    showError(input2, 'Password do not match');
  }
}

function getFeildName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//EVENT LISTENERS
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password, password2);
  // Христос воскрес, Иван. У меня, со вторника  температура.  Я надеялся, что пройдет к выходным и даже попытался присутствовать на уроке в четверг. Но вечером стало только хуже.  Посчитал, что должен Тебя предупредить.  
 


});