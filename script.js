const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  if(!expanded){
    nav.classList.add('open');
    nav.setAttribute('aria-hidden','false');
  } else {
    nav.classList.remove('open');
    nav.setAttribute('aria-hidden','true');
  }
});

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if(!name || !email || !message){
    formMessage.textContent = 'Por favor completa todos los campos.';
    formMessage.style.color = '#b91c1c';
    return;
  }

  formMessage.textContent = '¡Mensaje enviado! Gracias por contactarnos.';
  formMessage.style.color = '#16a34a';
  form.reset();
  console.log({ name, email, message });
});
