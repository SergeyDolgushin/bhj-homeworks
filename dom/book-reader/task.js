const FONT_SIZE = {
    'small': 'book_fs-big',
    'normal': ' ',
    'big': 'book_fs-small'
};

const fontSizeElement = document.querySelector('.book');
const btnsFontSizeSet = document.querySelectorAll('.font-size');

const clearActiveStatus = (elements) => {
    elements.forEach((element) => {
        element.classList.remove('font-size_active');
    });
}


btnsFontSizeSet.forEach((btn) => {
    btn.addEventListener('click', (evt) => {
        evt.preventDefault();
        clearActiveStatus(btnsFontSizeSet);
        evt.target.classList.add('font-size_active');
        if (fontSizeElement.classList.length > 1) {
            fontSizeElement.classList.remove(fontSizeElement.classList.item(1));
        }
        if (evt.target.dataset.size != 'normal') {
            fontSizeElement.classList.add(FONT_SIZE[evt.target.dataset.size]);
        }
    });
});
