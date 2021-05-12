import './styles.css';

const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body'),
}

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let intervalId = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', startClrSwitch);
refs.stopBtn.addEventListener('click', stopClrSwitch);

function startClrSwitch() {
    const numberOfColors = Object.keys(colors).length;
    let colorToSet = null;

    refs.startBtn.disabled = true;
        
    intervalId = setInterval(() => {
        colorToSet = colors[randomIntegerFromInterval(1, numberOfColors)];
        refs.body.style.backgroundColor = colorToSet;
    }, 250, colors, colorToSet, numberOfColors);
};

function stopClrSwitch() {
    clearInterval(intervalId);
    refs.startBtn.disabled = false;
};