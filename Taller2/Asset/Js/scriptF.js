document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const message = document.getElementById('formMessage');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const nombre = form.nombre.value.trim();
      const email = form.email.value.trim();
      const mensaje = form.mensaje.value.trim();
  
      if (!nombre || !email || !mensaje) {
        message.textContent = 'Por favor, complete todos los campos.';
        message.style.color = 'red';
        return;
      }
  
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        message.textContent = 'Ingrese un correo electrónico válido.';
        message.style.color = 'red';
        return;
      }
  
      message.textContent = '¡Mensaje enviado con éxito!';
      message.style.color = 'green';
      form.reset();
    });
  });
  