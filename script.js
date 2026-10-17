/* Mobile menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
hamburger.onclick = () => {
  navMenu.classList.toggle('show');
  hamburger.textContent = navMenu.classList.contains('show') ? '✕' : '☰';
};

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
  document.querySelector('.navbar').style.boxShadow = window.scrollY > 10 ? '0 4px 30px rgba(0,0,0,0.06)' : 'none';
});

// Smooth scroll for nav links + view plates
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))?.scrollIntoView({behavior:'smooth'});
    navMenu.classList.remove('show');
    hamburger.textContent = '☰';
  });
});
document.getElementById('viewPlatesBtn').onclick = () => document.getElementById('products').scrollIntoView({behavior:'smooth'});
document.getElementById('calcBtn').onclick = () => alert('SOLARA Calculator: 3x Pro 450W = Rs 8,500/month saving in Gujranwala! ☀️');
document.getElementById('quoteBtn').onclick = () => alert('Get Quote: Our team will contact you in 24 hours!');

// --- BUY NOW / DETAILS BUTTON LOGIC 
const modal = document.getElementById('orderModal');
const modalName = document.getElementById('modalName');
const modalPrice = document.getElementById('modalPrice');

document.querySelectorAll('.buy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.p-card');
    modalName.textContent = card.querySelector('h3').textContent;
    modalPrice.textContent = card.querySelector('.p-price').textContent;
    modal.classList.add('show');
  });
});

document.getElementById('closeModal').onclick = () => modal.classList.remove('show');
modal.onclick = (e) => { if(e.target === modal) modal.classList.remove('show'); };

document.getElementById('confirmBtn').onclick = () => {
  const name = document.getElementById('cName').value || 'Guest';
  alert(`Order Confirmed for ${modalName.textContent}!\nThanks ${name}, SOLARA team will WhatsApp you.`);
  modal.classList.remove('show');
};
*/

document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile Menu Toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    hamburger.textContent = navMenu.classList.contains('show') ? '✕' : '☰';
  });

  // 2. Navbar Shadow on Scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.06)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });

  // 3. Smooth Scroll for Nav Links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      navMenu.classList.remove('show');
      hamburger.textContent = '☰';
    });
  });

  // 4. Hero Buttons
  document.getElementById('viewPlatesBtn').addEventListener('click', () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('calcBtn').addEventListener('click', () => {
    alert('SOLARA Calculator: 3x Pro 450W = Rs 8,500/month saving in Gujranwala! ☀️');
  });

  document.getElementById('quoteBtn').addEventListener('click', () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  });

  // 5. Order Modal - BUY NOW / DETAILS Logic
  const modal = document.getElementById('orderModal');
  const modalName = document.getElementById('modalName');
  const modalPrice = document.getElementById('modalPrice');

  document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.p-card');
      const name = card.querySelector('h3').innerText;
      const price = card.querySelector('.p-price').innerText;

      modalName.innerText = name;
      modalPrice.innerText = price;
      modal.classList.add('show');
      document.body.style.overflow = 'hidden'; // lock background scroll
    });
  });

  // 6. Close Modal
  function closeModalFunc() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  document.getElementById('closeModal').addEventListener('click', closeModalFunc);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModalFunc();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModalFunc();
    }
  });

  // 7. Confirm Order
  document.getElementById('confirmBtn').addEventListener('click', () => {
    const nameInput = document.getElementById('cName');
    const phoneInput = document.getElementById('cPhone');

    if (!nameInput.value.trim() || !phoneInput.value.trim()) {
      alert('Please enter your Name and WhatsApp Number');
      return;
    }

    alert(`Order Confirmed for ${modalName.innerText}!\nThanks ${nameInput.value}, SOLARA team will WhatsApp you on ${phoneInput.value}.`);
    
    nameInput.value = '';
    phoneInput.value = '';
    closeModalFunc();
  });

});