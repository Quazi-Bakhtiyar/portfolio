// Add smooth scrolling for internal links
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Mobile menu functionality
  const setupMobileMenu = () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    const mobileOverlay = document.querySelector('.mobile-overlay');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    if (mobileMenuToggle) {
      // Toggle menu when hamburger icon is clicked
      mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        nav.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
      });
      
      // Close menu when clicking outside
      mobileOverlay.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        nav.classList.remove('active');
        mobileOverlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
      });
      
      // Close menu when clicking on nav links
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenuToggle.classList.remove('active');
          nav.classList.remove('active');
          mobileOverlay.classList.remove('active');
          document.body.classList.remove('no-scroll');
        });
      });
    }
  };
  
  // Form validation for contact form
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      let isValid = true;
      
      // Clear previous error styles
      [nameInput, emailInput, messageInput].forEach(input => {
        input.style.borderColor = '';
      });
      
      // Simple client-side validation (server also validates)
      if (!nameInput.value.trim()) {
        nameInput.style.borderColor = 'var(--danger-color)';
        isValid = false;
      }
      
      if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
        emailInput.style.borderColor = 'var(--danger-color)';
        isValid = false;
      }
      
      if (!messageInput.value.trim()) {
        messageInput.style.borderColor = 'var(--danger-color)';
        isValid = false;
      }
      
      if (!isValid) {
        e.preventDefault();
      }
    });
  }
  
  // Animation for skill items (optional enhancement)
  const animateSkillItems = () => {
    const skillItems = document.querySelectorAll('.skill-item');
    
    if (skillItems.length > 0) {
      skillItems.forEach((item, index) => {
        // Add a slight delay to each item for a staggered effect
        const delay = index * 100;
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, delay);
      });
    }
  };
  
  // Initialize any animations
  const initAnimations = () => {
    // Initialize skill item animations if they exist
    if (document.querySelector('.skills')) {
      // Set initial state for skill items
      document.querySelectorAll('.skill-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      });
      
      // Trigger animation
      animateSkillItems();
    }
  };
  
  // Add no-scroll class to body
  document.body.classList.add('no-scroll-setup');
  document.body.style.overflow = 'visible'; // Ensure scrolling is enabled by default
  
  // Call initialization functions
  setupMobileMenu();
  initAnimations();
}); 
 