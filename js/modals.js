function openModal(modalContainer, modal) {
   modalContainer.style.display = 'flex';
   setTimeout( function () { modal.style.transform = 'translateY(0%)'; }, 100);
}

function closeModal(modalContainer, modal) {
   modal.style.transform = 'translateY(-150%)';
   setTimeout( function () { modalContainer.style.display = 'none'; }, 1000);
}


