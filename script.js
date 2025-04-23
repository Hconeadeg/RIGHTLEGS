const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');

menuButton.addEventListener('click', () => {
    mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
});

const navLinks = document.querySelectorAll('nav a'); // Get links in main nav

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        const target = event.target.getAttribute('href');
        if (target === 'index.html') {
             window.location.href = 'index.html';
        }
    });
});

const shoeSlider = document.getElementById('shoeSlider');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const shoeItems = document.querySelectorAll('.shoe-item');
const itemWidth = shoeItems[0].offsetWidth + 20;
let scrollPosition = 0;

nextButton.addEventListener('click', () => {
    scrollPosition += itemWidth;
    if (scrollPosition > (shoeItems.length - 3) * itemWidth) {
        scrollPosition = 0;
    }
    shoeSlider.style.transform = `translateX(-${scrollPosition}px)`;
});

prevButton.addEventListener('click', () => {
    scrollPosition -= itemWidth;
    if (scrollPosition < 0) {
        scrollPosition = (shoeItems.length - 3) * itemWidth;
    }
    shoeSlider.style.transform = `translateX(-${scrollPosition}px)`;
});

// Mobile responsiveness for the number of visible items
function updateVisibleItems() {
    if (window.innerWidth < 480) {
        shoeSlider.style.transform = 'translateX(0)';
    } else if (window.innerWidth < 768) {
        scrollPosition = Math.max(0, Math.min(scrollPosition, (shoeItems.length - 2) * itemWidth));
        shoeSlider.style.transform = `translateX(-${scrollPosition}px)`;
    } else {
        scrollPosition = Math.max(0, Math.min(scrollPosition, (shoeItems.length - 3) * itemWidth));
        shoeSlider.style.transform = `translateX(-${scrollPosition}px)`;
    }
}


nextButton.addEventListener('click', () => {
    scrollPosition += itemWidth;
    if (scrollPosition > (shoeItems.length - 3) * itemWidth) {
        scrollPosition = 0;
    }
    shoeSlider.style.transform = `translateX(-${scrollPosition}px)`;
});

prevButton.addEventListener('click', () => {
    scrollPosition -= itemWidth;
    if (scrollPosition < 0) {
        scrollPosition = (shoeItems.length - 3) * itemWidth;
    }
    shoeSlider.style.transform = `translateX(-${scrollPosition}px)`;
});

function updateVisibleItems() {
    if (window.innerWidth < 480) {
        shoeSlider.style.transform = 'translateX(0)';
    } else if (window.innerWidth < 768) {
        scrollPosition = Math.max(0, Math.min(scrollPosition, (shoeItems.length - 2) * itemWidth));
        shoeSlider.style.transform = `translateX(-${scrollPosition}px)`;
    } else {
        scrollPosition = Math.max(0, Math.min(scrollPosition, (shoeItems.length - 3) * itemWidth));
        shoeSlider.style.transform = `translateX(-${scrollPosition}px)`;
    }
}


const newsletterForm = document.getElementById('newsletterForm');

newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailInput = document.getElementById('emailInput');
    const emailValue = emailInput.value;

    window.location.href = `https://example.com/subscription_confirmation?email=${encodeURIComponent(emailValue)}`;
});


window.addEventListener('resize', updateVisibleItems);
updateVisibleItems();
