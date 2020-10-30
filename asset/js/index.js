//selecting the form fields
const firstName = document.querySelector('#fname');

const lastName = document.querySelector('#lname');

const email = document.querySelector('#email');

const password = document.querySelector('#password');

const confirmPassword = document.querySelector('#cpassword');

const signupForm = document.querySelector('signForm');

const isRequired = (value) => (value === '' ? false : true);

const isEmailValid = (email) => {
  const reg = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  return reg.test(email);
};

const isPasswordSecure = (password) => {
  const reg = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
  );
  return reg.test(password);
};

//adding event listener to the form
FormData.addEventListener('submit', function (e) {
  //prevent the form from submitting once the signup button is clicked
  e.preventDefault();
});

const showErrorMessage = (input, message) => {
  const form = input.parentElement;
  form.classList.remove('valid');
  form.classList.add('invalid');

  const errorMessage = form.querySelector('small');
  errorMessage.textContent = message;
};

const showValidMessage = (input) => {
  const form = input.parentElement;
  form.classList.remove('invalid');
  form.classList.add('valid');

  const errorMessage = form.querySelector('small');
  errorMessage.textContent = '';
};

const checkFirstName = () => {
  const reg = /[a-z]/gi;

  const firstname = firstName.trim();

  if (!isRequired(firstname)) {
    showErrorMessage(firstName, 'First Name cannot be blanked');
  } else if (!reg(firstname)) {
    showErrorMessage(firstname, 'Input should only be alphabets');
  } else {
    showValidMessage(firstname);
    valid = true;
  }
  return valid;
};

const checkLastName = () => {
  const reg = /[a-z]/gi;

  const lastname = lastName.trim();

  if (!isRequired(lastname)) {
    showErrorMessage(lastName, 'Last Name cannot be blanked');
  } else if (!reg(lastname)) {
    showErrorMessage(lastname, 'Input should only be alphabets');
  } else {
    showValidMessage(lastname);
    valid = true;
  }
  return valid;
};
