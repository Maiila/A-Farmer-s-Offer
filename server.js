const track = document.getElementById('carouselTrack');
const cards = track.children;
let currentIndex = 0;

function slide(direction) {
  const total = cards.length;
  currentIndex = (currentIndex + direction + total) % total;
  const offset = currentIndex * -100;
  track.style.transform = `translateX(${offset}%)`; 
}


document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message submitted! Thank you for reaching out.");
});



 document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;

    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    // Reset error messages
    emailError.textContent = '';
    messageError.textContent = '';

    // Email validation
    if (!email.value) {
      emailError.textContent = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
      emailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    // Message validation
    if (!message.value) {
      messageError.textContent = 'Message is required.';
      isValid = false;
    }

    // If form is valid, show confirmation
    if (isValid) {
      alert(`Thank you, ${email.value}! You've subscribed with: ${email.value}`);
      document.getElementById('contactForm').reset();
    }
  });
