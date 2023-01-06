function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//Variant 1
const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
let timerID = null;
buttonStop.toggleAttribute("disabled", true);

buttonStart.addEventListener('click', changeBodyBColor);
function changeBodyBColor() {
    buttonStart.toggleAttribute("disabled");
    buttonStop.toggleAttribute("disabled");

    timerID = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000);
};

buttonStop.addEventListener('click', stopChangeBodyBColor);
function stopChangeBodyBColor() {
    clearInterval(timerID);
    buttonStart.toggleAttribute("disabled");
    buttonStop.toggleAttribute("disabled");
    // console.log('stop change color');
};


//Variant 2
// const bodyEl = document.querySelector('body');
// let timerID = null;
// bodyEl.children[2].toggleAttribute("disabled", true);

// bodyEl.addEventListener('click', changeBodyBColor);
// function changeBodyBColor(event) {
//     if (event.target.nodeName !== "BUTTON") {
//         return;
//     }
    
//     if (event.target.hasAttribute('data-start')) {
//         event.target.toggleAttribute("disabled");
//         bodyEl.children[2].toggleAttribute("disabled");

//         timerID = setInterval(() => {
//             bodyEl.style.backgroundColor = getRandomHexColor();
//         }, 1000);
//     }

//     if (event.target.hasAttribute('data-stop')) {
//         clearInterval(timerID);
//         event.target.toggleAttribute("disabled");
//         bodyEl.children[1].toggleAttribute("disabled");
//     }
// }