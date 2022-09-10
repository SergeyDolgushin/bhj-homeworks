const container = document.getElementById('cookie');
const counterText = document.getElementById('clicker__counter');
const timerText = document.getElementById('clicker__timer');

let timerStart = new Date();;

const onClickContainer = () => {
    const timerNext = new Date();
    const interval = timerNext.getTime() - timerStart.getTime();
    timerText.textContent = (1 / (interval / 1000)).toFixed(2);

    counterText.textContent = Number(counterText.textContent) + 1;
    container.width = container.width != 200 ? 200 : 300;
    container.height = container.width != 200 ? 256 : 128;
        
    timerStart = new Date();
}

container.addEventListener('click', onClickContainer);