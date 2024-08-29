document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Muchas gracias por tu mensaje, respondere a la brevedad!');
  document.getElementById('contactForm').reset();
});
