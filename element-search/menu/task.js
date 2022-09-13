const allLinks = document.querySelectorAll('.menu__link');
const pullDownMenu = document.querySelectorAll('.menu_sub');

const closeAllMenus = (element) => {
    pullDownMenu.forEach((item) => {
        if (item !== element){
            item.classList.remove('menu_active');
        }    
    });
};

allLinks.forEach((item) => {
    item.addEventListener('click', (evt) => {
        if (item.nextElementSibling) {
            evt.preventDefault();
            console.log(item);
            closeAllMenus(
                item.closest('.menu__item')
                    .querySelector('.menu_sub')
            );
            item.closest('.menu__item')
                .querySelector('.menu_sub')
                .classList.toggle('menu_active');
        }
    });
});

