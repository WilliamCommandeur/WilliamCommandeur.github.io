
const viewDetailsButtons = document.querySelectorAll('.view-details-button');

viewDetailsButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalTargetId = button.getAttribute('data-modal-target');
        const modal = document.getElementById(modalTargetId);

        if (modal) {
            modal.style.display = 'block';
        }
    });
});

const closeButtons = document.querySelectorAll('.close-button');
closeButtons.forEach(closeButton => {
    closeButton.addEventListener('click', () => {
        const modal = closeButton.closest('.modal');
        if (modal) {
            modal.style.display = 'none';
        }
    });
});

window.addEventListener('click', (event) => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});