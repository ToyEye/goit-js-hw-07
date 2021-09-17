const refs = {
    inpurRef: document.querySelector('#font-size-control'),
    spantRef: document.querySelector('#text'),
}
 
function getFontSize(e) {
    text.style.fontSize = `${e.target.value}px`;

}

refs.inpurRef.addEventListener('input', getFontSize);



