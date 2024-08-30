document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  const contactButton = document.getElementById('contactButton');

  header.addEventListener('mouseover', function() {
      contactButton.style.display = 'block';
  });

  header.addEventListener('mouseout', function() {
      contactButton.style.display = 'none';
  });

  contactButton.addEventListener('click', function() {
      const contactTab = document.querySelector('a[href="#contact"]');
      if (contactTab) {
          contactTab.click();
      }
  });
});

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Muchas gracias por tu mensaje, responderé a la brevedad!');
    document.getElementById('contactForm').reset();
  });

