const viewDetailsButton = document.querySelector('.view-details-button');
const modal = document.querySelector('.modal');

const closeButton = document.querySelector('.close-button');

viewDetailsButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});