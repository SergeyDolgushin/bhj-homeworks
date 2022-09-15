const tabs = document.querySelectorAll('.tab')
const tabsContent = document.querySelectorAll('.tab__content')

const setActiveContent = (element) => {
    const tabIndex = Array.from(tabs).indexOf(element);
    
    tabsContent.forEach((tab) => {
        tab.classList.remove('tab__content_active')
    });

    tabsContent[tabIndex].classList.add('tab__content_active');
}

const setTabActiveState = (element) => {
    if (element.classList.contains('tab_active')) {
        return
    }

    tabs.forEach((tab) => {
        tab.classList.remove('tab_active')
    });

    element.classList.add('tab_active');

    setActiveContent(element);
}


const handlerTab = (event) => {
    setTabActiveState(event.target);
} 

tabs.forEach((tab) => {
    tab.addEventListener('click', handlerTab);
});