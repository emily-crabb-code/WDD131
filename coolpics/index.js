const gallery = document.querySelector('.images');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    
// Code to show modal  - Use event parameter 'e'   
    let imageSrc = e.target.src;
    
    modalImage.src = imageSrc;

    modalImage.src = imageSrc.replace("-sm.jpg", "-full.jpg");
    
    modal.showModal();

    
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
          