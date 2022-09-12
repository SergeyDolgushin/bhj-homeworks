const holes = document.querySelectorAll('.hole');
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

const statusGame = {
  win: {
    count: 10,
    message: 'Вы выиграли'
  },
  lost: {
    count: 5,
    message: 'Вы проиграли'
  },
}
let isMole = 0;
let missing = 0;



const getStatus = (status) => {
    isMole = 0; 
    missing = 0;
    dead.textContent = 0;
    lost.textContent = 0;
    alert(status);
}


holes.forEach((hole) => {
  hole.addEventListener('click', (evt) => {
    evt.target.classList.contains('hole_has-mole') ? isMole++ : missing++;
    dead.textContent = isMole;
    lost.textContent = missing;
    
    if (isMole === statusGame.win.count) {
      getStatus(statusGame.win.message);  
    }

    if (missing === statusGame.lost.count) {
      getStatus(statusGame.lost.message);
    }

  });
});