const elements = document.querySelectorAll('.reveal');
const viewport = window.visualViewport;

const toggleActiveState = () => {
    elements.forEach((element) => {
        if (element.getBoundingClientRect().y < viewport.height) {
            element.classList.add('reveal_active');
        }
        if (element.getBoundingClientRect().y < -100 
            || element.getBoundingClientRect().y > viewport.height) {
                element.classList.remove('reveal_active');
        }
    });
}


document.addEventListener('scroll', () => {
    toggleActiveState();    
});