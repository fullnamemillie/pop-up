const modalBtns = document.querySelectorAll('.btn');
const modals = document.querySelectorAll('.modal');

function openModal(elem) {
    elem.classList.add('active');
};

function closeModal(e) {
    if (e.target.classList.contains('modal__close') || e.target.classList.contains('modal__bg')) {
        e.target.closest('.modal').classList.remove('active');
    };

};

modalBtns.forEach(function(btn) {
    btn.addEventListener('click', (e) => {
        let data = e.target.dataset.modalOpen;

        modals.forEach(function(item) {
            if (item.dataset.modal === data) {
                openModal(item);
            }
        });
    });
});

modals.forEach(item => {
    item.addEventListener('click', e => closeModal(e));
})