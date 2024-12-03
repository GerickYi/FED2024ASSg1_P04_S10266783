document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const reviewsContainer = document.querySelector('.reviews');

  const reviews = [
      { name: "John Wick", rating: 5, text: "Amazing service, my dog loved it! Highly recommend." },
      { name: "Jane Foster", rating: 4, text: "Great grooming service, with friendly staff." },
      { name: "Nick Cage", rating: 5, text: "Perfect place for my cat to relax along with me." },
      { name: "Alex Peralta", rating: 3, text: "Great place, but is constantly crowded." },
      { name: "Anne Hathaway", rating: 3, text: "Prices are a bit more expensive compared to pet stores." }
  ];

  function displayReviews() {
      reviews.forEach(review => {
          const reviewItem = document.createElement('div');
          reviewItem.classList.add('review-item');
          
          const starRating = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
          reviewItem.innerHTML = `
              <div class="star-rating">${starRating}</div>
              <p><strong>${review.name}</strong></p>
              <p>"${review.text}"</p>
          `;
          
          reviewsContainer.appendChild(reviewItem);
      });
  }

  displayReviews();

  if (form) {
      form.addEventListener('submit', (event) => {
          const reviewText = document.querySelector('#review-text').value.trim();
          const name = document.querySelector('#name').value.trim();
          const contact = document.querySelector('#contact').value.trim();

          if (!reviewText || !name || !contact) {
              alert('All fields are required.');
              event.preventDefault();
          } else if (!/^\d+$/.test(contact)) {
              alert('Contact number must contain only digits.');
              event.preventDefault();
          } else if (selectedRating === 0) {
              alert('Please select a rating.');
              event.preventDefault();
          } else {
              console.log(`Review: ${reviewText}`);
              console.log(`Name: ${name}`);
              console.log(`Contact: ${contact}`);
              console.log(`Rating: ${selectedRating}`);
          }
      });
  }

  const stars = document.querySelectorAll('.star');
  let selectedRating = 0;

  stars.forEach(star => {
      star.addEventListener('click', () => {
          selectedRating = star.getAttribute('data-value');
          updateStars(selectedRating);
      });
  });

  function updateStars(rating) {
      stars.forEach(star => {
          if (star.getAttribute('data-value') <= rating) {
              star.classList.add('selected');
          } else {
              star.classList.remove('selected');
          }
      });
  }
});
