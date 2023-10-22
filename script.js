// JavaScript for lightbox, toggleMenu, closeLightbox, and scrolling functionality

function openLightbox(imagePath) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    lightbox.style.display = 'flex';
    lightboxImage.src = imagePath;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

function toggleMenu() {
    var menu = document.querySelector('nav ul');
    menu.classList.toggle('active');
}

document.getElementById('close-btn').addEventListener('click', closeLightbox);

document.getElementById('lightbox').addEventListener('click', function(event) {
    if (event.target === this) {
        closeLightbox();
    }
});

window.addEventListener('scroll', function() {
    var scrollUpBtn = document.getElementById('scrollUpBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollUpBtn.classList.add('active');
    } else {
        scrollUpBtn.classList.remove('active');
    }
});

document.getElementById('scrollUpBtn').addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
