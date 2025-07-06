document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.getElementById('next').addEventListener('click', () => {
  goToSlide(currentSlide + 1);
});

document.getElementById('prev').addEventListener('click', () => {
  goToSlide(currentSlide - 1);
});

function goToSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + totalSlides) % totalSlides;
  slides[currentSlide].classList.add('active');
}

// Auto slide a cada 5s
setInterval(() => {
  goToSlide(currentSlide + 1);
}, 5000);


function iniciarContagemRegressiva(dataAlvo) {
  const diasEl = document.getElementById('dias');
  const horasEl = document.getElementById('horas');
  const minutosEl = document.getElementById('minutos');
  const segundosEl = document.getElementById('segundos');

  function atualizarContador() {
    const agora = new Date().getTime();
    const distancia = dataAlvo - agora;

    if (distancia < 0) {
      diasEl.textContent = '00';
      horasEl.textContent = '00';
      minutosEl.textContent = '00';
      segundosEl.textContent = '00';
      return;
    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    diasEl.textContent = dias.toString().padStart(2, '0');
    horasEl.textContent = horas.toString().padStart(2, '0');
    minutosEl.textContent = minutos.toString().padStart(2, '0');
    segundosEl.textContent = segundos.toString().padStart(2, '0');
  }

  atualizarContador();
  setInterval(atualizarContador, 1000);
}

// Defina a data de início do curso (20/07/2025 às 23:59)
const dataCurso = new Date('2025-07-20T23:59:00').getTime();
iniciarContagemRegressiva(dataCurso);


document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        button.classList.toggle('active');
        if (button.classList.contains('active')) {
            answer.classList.add('active');
        } else {
            answer.classList.remove('active');
        }
    });
});