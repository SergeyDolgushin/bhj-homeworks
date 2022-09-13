const imgContainers = document.querySelectorAll('.slider__item');
const sliderDots = document.querySelectorAll('.slider__dot');
const buttonPrev = document.querySelector('.slider__arrow_prev');
const buttonNext = document.querySelector('.slider__arrow_next');

const getCurrentSlide = () => {
    return [...imgContainers].findIndex(
        (item) => item.classList.contains('slider__item_active')
        );
};

const initialStateDots = () => {
    sliderDots[getCurrentSlide()].classList.add('slider__dot_active');
}

const removeActiveClass = (index) => {
    imgContainers[index].classList.remove('slider__item_active');
    sliderDots[index].classList.remove('slider__dot_active');
}


const addActiveClass = (index) => {
    imgContainers[index].classList.add('slider__item_active');
    sliderDots[index].classList.add('slider__dot_active');
}

const changeSlide = (nextSlide) => {
    let currentIndex = getCurrentSlide();
    
    removeActiveClass(currentIndex);

    if (nextSlide) {
        currentIndex = currentIndex === imgContainers.length - 1
        ? 0 : currentIndex + 1;
    } else {
        currentIndex = currentIndex === 0
        ? imgContainers.length - 1 : currentIndex - 1;
    } 

    addActiveClass(currentIndex);
}

buttonPrev.addEventListener('click', () => {
    changeSlide(false);
});

buttonNext.addEventListener('click', () => {
    changeSlide(true);
});

sliderDots.forEach((item, key) => {
    item.addEventListener('click', (evt) => {
        const currentIndex = getCurrentSlide();
        if (currentIndex !== key) {
            removeActiveClass(currentIndex);
            addActiveClass(key);
        }
    });
});

initialStateDots();