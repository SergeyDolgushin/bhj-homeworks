const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const btnSuccess = document.querySelector('.show-success');
const btnsClose = document.querySelectorAll('.modal__close_times');

const showModal = (modalItem) => {
    modalItem.classList.toggle('modal_active')
};

btnsClose.forEach((item) => {
    item.addEventListener('click', () => {
        item.closest('.modal').classList.toggle('modal_active');
    });
});

btnSuccess.addEventListener('click', (evt) => {
    evt.preventDefault();
    showModal(modalMain);
    showModal(modalSuccess);
});


showModal(modalMain);
