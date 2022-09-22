const elements = document.querySelectorAll('.reveal');
const viewport = window.visualViewport;

const isVisible = (element) => {
  const {top, bottom} = element.getBoundingClientRect();

  if (bottom < 0 || top > window.innerHeight) {
    return false;
  }

  return true
}


const toggleActiveState = () => {
    elements.forEach((element) => {
      isVisible(element)
        ? element.classList.add('reveal_active')
        : element.classList.remove('reveal_active');
    });
}


document.addEventListener('scroll', () => {
    toggleActiveState();
});
