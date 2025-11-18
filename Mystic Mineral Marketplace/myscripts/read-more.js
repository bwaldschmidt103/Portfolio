document.querySelectorAll('.read-more-btn').forEach((button) => {
    button.addEventListener('click', (e) => {
      const target = document.getElementById(button.dataset.target);
      if (target.classList.contains('visible-content')) {
        target.classList.remove('visible-content');
        button.setAttribute('aria-expanded', 'false');
      } else {
        target.classList.add('visible-content');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
  