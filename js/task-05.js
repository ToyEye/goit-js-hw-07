const refs = {
    inputRef: document.querySelector('#name-input'),
    outputRef: document.querySelector('#name-output'),
}


refs.inputRef.addEventListener('input',changeInpuut);

function changeInpuut(e) {
    if (e.target.value.length > 0) {
        refs.outputRef.textContent = e.target.value;
        }
    else {
        refs.outputRef.textContent = `незнакомец`;
    }
}


