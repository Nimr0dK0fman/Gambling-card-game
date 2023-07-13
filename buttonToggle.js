const infoButton = document.getElementById('infoButton');
const infoDiv = document.getElementById('infoDiv');

infoButton.addEventListener('click', function() {
  infoDiv.classList.toggle('show');
});