let cardMenus = document.querySelectorAll('.card-menu:not(.nav) .main');

cardMenus.forEach(card => {
    card.addEventListener('click', () => {
        cardMenus.forEach(cardToHide => cardToHide.parentElement.parentElement.classList.remove('active'));
        card.parentElement.parentElement.classList.add('active');
    })
});

const inactivateCard = (id) => {
    document.getElementById(id).classList.remove('active');
}