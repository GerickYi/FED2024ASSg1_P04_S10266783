let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelector('.carousel-images');
  const totalSlides = slides.children.length;
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (event) => {
            const review = document.querySelector('#review-text').value.trim();
            const name = document.querySelector('#name').value.trim();
            const contact = document.querySelector('#contact').value.trim();

            if (!review || !name || !contact) {
                alert('All fields are required.');
                event.preventDefault(); // Prevent form submission
            } else if (!/^\d+$/.test(contact)) {
                alert('Contact number must contain only digits.');
                event.preventDefault();
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            stars.forEach((s, i) => {
                s.textContent = i <= index ? '★' : '☆';
            });
        });
    });
});
