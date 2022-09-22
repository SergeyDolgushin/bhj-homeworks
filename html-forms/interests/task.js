const checkboxes = document.querySelectorAll('.interest__check');

console.log(checkboxes);

checkboxes.forEach((item) => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    evt.target.checked = true;
    console.log(evt, evt.target.parentNode, nodeArray());
  });
});
