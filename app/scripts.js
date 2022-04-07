const name = document.getElementById('nameInput');
const nameResult = document.getElementById('nameResult');
const position = document.getElementById('positionInput');
const positionResult = document.getElementById('positionResult');
const email = document.getElementById('emailInput');
const emailResult = document.getElementById('emailAddress');
const phone = document.getElementById('phoneInput');
const phoneResult = document.getElementById('phoneResult');

const nameInputHandler = function (e) {
    nameResult.innerHTML = e.target.value;
}

const positionInputHandler = function (e) {
    positionResult.innerHTML = e.target.value;
}

const phoneInputHandler = function (e) {
    phoneResult.innerHTML = e.target.value;
    phoneResult.setAttribute('href', `tel:${e.target.value}`);
}

const emailInputHandler = function (e) {
    emailResult.innerHTML = e.target.value;
    emailResult.setAttribute('href', `mailto:${e.target.value}`);
}

name.addEventListener('input', nameInputHandler);
name.addEventListener('propertychange', nameInputHandler);
position.addEventListener('input', positionInputHandler);
position.addEventListener('propertychange', positionInputHandler);
phone.addEventListener('input', phoneInputHandler);
phone.addEventListener('propertychange', phoneInputHandler);
email.addEventListener('input', emailInputHandler);
email.addEventListener('propertychange', emailInputHandler);