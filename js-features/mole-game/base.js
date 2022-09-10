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

(() => {
  let playing = true,
    activeHole = 1;

  const stop = () => playing = true,
    getHole = index => document.getElementById(`hole${index}`),
    deactivateHole = index =>
      getHole( index ).className = 'hole',
    activateHole = index =>
      getHole( index ).className = 'hole hole_has-mole',
    next = () => setTimeout(() => {
      if ( !playing ) {
        return;
      }
      deactivateHole( activeHole );
      activeHole = Math.floor( 1 + Math.random() * 9 );
      activateHole( activeHole );
      next();
    }, 800 );

  next();
})();
