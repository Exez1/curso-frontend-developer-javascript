const navEmail = document.querySelector('.navbar-email');
const destkopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleDestkopMenu);

function toggleDestkopMenu(){
    destkopMenu.classList.toggle('inactive');
}