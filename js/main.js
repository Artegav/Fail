const text = 'Твоя новая неудача - ещё одна интересная история';
let index = 0;
let logo = document.getElementById('logo');
let baseLogo = 'F';
let activeLogo = 'Fail';

function writeTitle () {
    document.getElementById('title').innerHTML = text.slice(0, index);

    index++;
}

logo.onmouseover = function () {
    setTimeout(() => {
        logo.innerText = activeLogo;
    }, 300)
}

logo.onmouseleave = function () {
    logo.innerText = baseLogo;
}

setInterval(() => {
    writeTitle();
}, 75);