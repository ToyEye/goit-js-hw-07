const refs = {
    inputRef: document.querySelector('#name-input'),
    outputRef: document.querySelector('#name-output'),
}


refs.inputRef.addEventListener('input',changeInput);

function changeInput(e) {
      // Вариант 1
    // if (e.target.value.length > 0) {
    //     refs.outputRef.textContent = e.target.value;
    //     }
    // else {
    //     refs.outputRef.textContent = `незнакомец`;
    // }
      // Вариант 2
    e.target.value.length > 0 ? refs.outputRef.textContent = e.target.value : refs.outputRef.textContent = `незнакомец`;
}


