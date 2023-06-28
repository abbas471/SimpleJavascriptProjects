const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const images = Array.from(document.querySelectorAll('.slider-container img'));
let currentIndex = 0;

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex === images.length) {
    currentIndex = 0;
  }
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  updateSlider();
});

function updateSlider() {
  sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(() => {
  currentIndex++;
  if (currentIndex === images.length) {
    currentIndex = 0;
  }
  updateSlider();
}, 5000);
