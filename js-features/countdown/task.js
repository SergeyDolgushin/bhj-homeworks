 const timerCount = document.getElementById('timer');

 const changeTimer = () => {
    const currentTimerCount = Number(timerCount.textContent) - 1;
    timerCount.textContent = currentTimerCount;

    if (currentTimerCount === 0) {
        alert('Вы победили в конкурсе');
        clearInterval(intervalID);
    }
 }

const intervalID = setInterval(changeTimer, 1000);