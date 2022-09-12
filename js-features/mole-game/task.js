const holes = document.querySelectorAll('.hole');
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

let isMole = 0;
let missing = 0;


holes.forEach((hole) => {
  hole.addEventListener('click', (evt) => {
    evt.target.classList.contains('hole_has-mole') ? isMole++ : missing++;
    dead.textContent = isMole;
    lost.textContent = missing;
    
    if (isMole === 10) {
      isMole = 0; 
      missing = 0;
      alert('Вы выиграли');
    }

    if (missing === 5) {
      isMole = 0; 
      missing = 0;
      alert('Вы проиграли');
    }

  });
});