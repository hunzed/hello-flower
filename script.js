const button = document.getElementById('actionButton');
const content = document.getElementById('content');
const flowerContainer = document.getElementById('flowerContainer');

button.addEventListener('click', () => {
  // Hide content
  content.style.opacity = '0';

  setTimeout(() => {
    // Hide content completely and show the flower
    content.classList.add('hidden');
    flowerContainer.classList.remove('hidden');
  }, 2000);
});
