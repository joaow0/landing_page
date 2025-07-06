window.addEventListener('DOMContentLoaded', () => {
  const bubble = document.querySelector('.whatsapp-message-bubble');
  if (bubble) {
    setTimeout(() => {
      bubble.style.display = 'none';
    }, 5000); // 5000 milissegundos = 5 segundos
  }
});
