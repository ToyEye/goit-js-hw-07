const inputRed = document.querySelector('#validation-input');

inputRed.addEventListener('blur', examinationLength);

function examinationLength(event) {
    if (event.currentTarget.value.length == inputRed.dataset.length) {
        inputRed.classList.remove('invalid');
        inputRed.classList.add('valid');
    }
    else {
        inputRed.classList.remove('valid');
        inputRed.classList.add('invalid');
    }
}
