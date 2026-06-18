/**
 * DevBlog — JavaScript Principal
 * Funcionalidades: menu mobile, validação de formulário, dark mode, formulário funcional
 */

document.addEventListener('DOMContentLoaded', function () {

  // ===== MENU HAMBÚRGUER =====
  // Toggle do menu mobile ao clicar no botão hambúrguer
  const menuToggle = document.querySelector('.menu-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function () {
      mainNav.classList.toggle('active');
    });
  }

  // ===== MODO CLARO/ESCURO =====
  // Toggle de tema com persistência via localStorage
  const themeToggle = document.querySelector('.theme-toggle');
  const body = document.body;

  // Carrega tema salvo
  const savedTheme = localStorage.getItem('devblog-theme');
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
    if (themeToggle) themeToggle.textContent = '🌙';
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      body.classList.toggle('light-mode');

      if (body.classList.contains('light-mode')) {
        localStorage.setItem('devblog-theme', 'light');
        themeToggle.textContent = '🌙';
      } else {
        localStorage.setItem('devblog-theme', 'dark');
        themeToggle.textContent = '☀️';
      }
    });
  }

  // ===== VALIDAÇÃO DE FORMULÁRIOS =====
  // Validação com feedback visual nos formulários de newsletter e contato
  const forms = document.querySelectorAll('form[data-validate]');

  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      let isValid = true;

      // Limpa erros anteriores
      form.querySelectorAll('.error-message').forEach(function (el) {
        el.remove();
      });
      form.querySelectorAll('.input-error').forEach(function (el) {
        el.classList.remove('input-error');
      });

      // Valida campos required
      const fields = form.querySelectorAll('[required]');
      fields.forEach(function (field) {
        if (!field.value.trim()) {
          isValid = false;
          showError(field, 'Este campo é obrigatório');
        } else if (field.type === 'email' && !isValidEmail(field.value)) {
          isValid = false;
          showError(field, 'Digite um e-mail válido');
        }
      });

      if (!isValid) {
        e.preventDefault();
      }
    });
  });

  // Exibe mensagem de erro abaixo do campo
  function showError(field, message) {
    field.classList.add('input-error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    field.parentNode.appendChild(errorDiv);
  }

  // Valida formato de e-mail
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // ===== FORMULÁRIO FUNCIONAL (EmailJS) =====
  // Envia o formulário de contato via EmailJS para contatodevblog@gmail.com
  const contactForm = document.querySelector('#contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Validação antes de enviar
      let isValid = true;
      contactForm.querySelectorAll('.error-message').forEach(function (el) {
        el.remove();
      });
      contactForm.querySelectorAll('.input-error').forEach(function (el) {
        el.classList.remove('input-error');
      });

      const fields = contactForm.querySelectorAll('[required]');
      fields.forEach(function (field) {
        if (!field.value.trim()) {
          isValid = false;
          showError(field, 'Este campo é obrigatório');
        } else if (field.type === 'email' && !isValidEmail(field.value)) {
          isValid = false;
          showError(field, 'Digite um e-mail válido');
        }
      });

      if (!isValid) return;

      // Desabilita botão durante envio
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;

      // Envia via EmailJS
      emailjs.sendForm('service_6l09va8', 'template_w5n0a8s', contactForm)
        .then(function () {
          showSuccess(contactForm, 'Mensagem enviada com sucesso! Recebemos sua mensagem e alguém da equipe entrará em contato em breve.');
          contactForm.reset();
        })
        .catch(function (error) {
          showSuccess(contactForm, 'Erro ao enviar mensagem. Tente novamente ou envie diretamente para contatodevblog@gmail.com');
          console.error('EmailJS error:', error);
        })
        .finally(function () {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        });
    });
  }

  // ===== FORMULÁRIO NEWSLETTER =====
  const newsletterForm = document.querySelector('#newsletter-form');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();

      let isValid = true;
      newsletterForm.querySelectorAll('.error-message').forEach(function (el) {
        el.remove();
      });
      newsletterForm.querySelectorAll('.input-error').forEach(function (el) {
        el.classList.remove('input-error');
      });

      const fields = newsletterForm.querySelectorAll('[required]');
      fields.forEach(function (field) {
        if (!field.value.trim()) {
          isValid = false;
          showError(field, 'Este campo é obrigatório');
        } else if (field.type === 'email' && !isValidEmail(field.value)) {
          isValid = false;
          showError(field, 'Digite um e-mail válido');
        }
      });

      if (!isValid) return;

      const submitBtn = newsletterForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Inscrevendo...';
      submitBtn.disabled = true;

      emailjs.sendForm('service_6l09va8', 'template_w5n0a8s', newsletterForm)
        .then(function () {
          showSuccess(newsletterForm, 'Inscrição realizada! Você receberá nossas novidades no e-mail informado.');
          newsletterForm.reset();
        })
        .catch(function (error) {
          showSuccess(newsletterForm, 'Erro ao inscrever. Tente novamente mais tarde.');
          console.error('EmailJS error:', error);
        })
        .finally(function () {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        });
    });
  }

  // Exibe mensagem de sucesso/erro após envio
  function showSuccess(form, message) {
    // Remove mensagem anterior se existir
    const existing = form.querySelector('.form-status');
    if (existing) existing.remove();

    const statusDiv = document.createElement('div');
    statusDiv.className = 'form-status';
    statusDiv.textContent = message;
    form.appendChild(statusDiv);

    // Remove após 8 segundos
    setTimeout(function () {
      statusDiv.remove();
    }, 8000);
  }

  // Filtro de artigos por categoria
  const filterButtons = document.querySelectorAll('.filter-btn');
  const categorySections = document.querySelectorAll('.category-section[data-categoria]');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filtro = btn.dataset.filter;

      categorySections.forEach(section => {
        if (filtro === 'todos' || section.dataset.categoria === filtro) {
          section.classList.remove('hidden');
        } else {
          section.classList.add('hidden');
        }
      });
    });
  });

  // ===== MAPA INTERATIVO (LEAFLET) =====
  // Card flip + mapa com marcador na Uniftec
  const locationCard = document.getElementById('location-card');
  let mapInitialized = false;

  if (locationCard) {
    locationCard.addEventListener('click', function () {
      locationCard.classList.toggle('flipped');

      // Inicializa o mapa apenas na primeira vez que abre
      if (!mapInitialized && typeof L !== 'undefined') {
        mapInitialized = true;
        setTimeout(function () {
          const map = L.map('map').setView([-29.1634, -51.1797], 16);

          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap'
          }).addTo(map);

          L.marker([-29.1634, -51.1797])
            .addTo(map)
            .bindPopup('<strong>Uniftec</strong><br>R. Gustavo Ramos Sehbe, 107<br>Caxias do Sul - RS')
            .openPopup();
        }, 400);
      }
    });
  }

});
