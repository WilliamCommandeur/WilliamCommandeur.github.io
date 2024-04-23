// Sélectionnez tous les boutons avec la classe '.view-details-button'
const viewDetailsButtons = document.querySelectorAll('.view-details-button');

// Ajoutez un écouteur d'événement à chaque bouton
viewDetailsButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalTargetId = button.getAttribute('data-modal-target');
        const modal = document.getElementById(modalTargetId);

        if (modal) {
            modal.style.display = 'block';
        }
    });
});

// Ajoutez un écouteur d'événement pour le bouton de fermeture dans chaque modal
const closeButtons = document.querySelectorAll('.close-button');
closeButtons.forEach(closeButton => {
    closeButton.addEventListener('click', () => {
        const modal = closeButton.closest('.modal');
        if (modal) {
            modal.style.display = 'none';
        }
    });
});

// Ajoutez un écouteur d'événement pour fermer la modal lors d'un clic en dehors de la modal
window.addEventListener('click', (event) => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});