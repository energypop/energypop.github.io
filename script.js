// Add active class to current page in navigation
document.addEventListener('DOMContentLoaded', () => {
  // Get current page path
  const currentPage = window.location.pathname.split('/').pop();

  // Find the corresponding navigation link and add active class
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage) {
      link.classList.add('active');
    }
  });

  // Add smooth page transitions
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    // Only apply to internal links
    if (link.hostname === window.location.hostname) {
      link.addEventListener('click', function(e) {
        // Don't apply to links that open in new tabs
        if (this.target === '_blank') return;

        e.preventDefault();
        const href = this.getAttribute('href');

        // Fade out
        document.body.style.opacity = 0;

        // Navigate after transition
        setTimeout(() => {
          window.location.href = href;
        }, 300);
      });
    }
  });

  // Fade in on page load
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.3s ease';
    document.body.style.opacity = 1;
  }, 10);
});
