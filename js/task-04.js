
const refs = {
    removeCounter: document.querySelector("[data-action ='decrement']"),
    addCounter: document.querySelector("[data-action ='increment']"),
    counterPoint: document.querySelector('#value'),
}

let counterValue = 0;

const  removeCounterPoint = () => {
    counterValue -= 1;
    refs.counterPoint.textContent = counterValue;
}

const  addCounterPoint = () => {
    counterValue += 1;
    refs.counterPoint.textContent = counterValue;
}


refs.removeCounter.removeEventListener('click', removeCounterPoint);
refs.addCounter.addEventListener('click', addCounterPoint);


