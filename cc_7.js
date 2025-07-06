const input = document.getElementById('cta-input');
const button = document.getElementById('update-btn');
const headline = document.getElementById('hero-title');

button.addEventListener('click', () => {
  const newText = input.value.trim();
  if (newText) {
    headline.textContent = newText;
    input.value = '';
  }
});