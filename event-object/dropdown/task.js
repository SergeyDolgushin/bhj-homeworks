const menuList = document.querySelector('.dropdown__list');
const listItems = document.querySelectorAll('.dropdown__item');
const menuListLabel = document.querySelector('.dropdown__value');

const toggleActiveState = (mainMenu, menuElement, activeClassName) => {
    mainMenu.addEventListener('click', () => {
        menuElement.classList.toggle(activeClassName);
    });
};

const getMenuItem = (itemsList, labelElement, menuElement, activeClassName) => {
    itemsList.forEach((item) => {
        item.addEventListener('click', (evt) => {
            evt.preventDefault();
            labelElement.textContent = evt.target.textContent;
            menuElement.classList.toggle(activeClassName);
        });
    });
};


toggleActiveState(menuListLabel, menuList, 'dropdown__list_active');
getMenuItem(listItems, menuListLabel, menuList, 'dropdown__list_active');