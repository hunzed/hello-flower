const button = document.getElementById('actionButton');
const content = document.getElementById('content');
const circleContainer = document.getElementById('circleContainer');

button.addEventListener('click', () => {
  // Hide content
  content.style.opacity = '0';

  setTimeout(() => {
    // Hide content completely and show the circle
    content.classList.add('hidden');
    circleContainer.classList.remove('hidden');
  }, 1000);
});
