const button = document.getElementById('actionButton');
const content = document.getElementById('content');
const emojiContainer = document.getElementById('emojiContainer');

button.addEventListener('click', () => {
  // Fade out content
  content.style.opacity = '0';

  setTimeout(() => {
    // Hide content completely and show the heart envelope emoji
    content.classList.add('hidden');
    emojiContainer.classList.remove('hidden');
  }, 1000);
});
