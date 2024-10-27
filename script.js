document.addEventListener('DOMContentLoaded', (event) => {
  const nav = document.querySelector('nav');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navIcons = document.querySelector('.nav-icons');
  const modeToggle = document.querySelector('.mode-toggle');
  const body = document.body;
  const searchContainer = document.querySelector('.search-container');
  const searchIcon = document.querySelector('.search-icon');
  const searchInput = document.querySelector('.search-input');

  // Tema kontrolü
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
      body.classList.add('dark-mode');
      modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      modeToggle.title = "Açık Tema";
  }

  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          nav.classList.add('scrolled');
      } else {
          nav.classList.remove('scrolled');
      }
  });

  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      navIcons.classList.toggle('active');
  });

  const navItems = document.querySelectorAll('.nav-links ul li');
  navItems.forEach(item => {
      item.addEventListener('click', function() {
          navItems.forEach(i => i.classList.remove('active'));
          this.classList.add('active');
      });
  });

  modeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      if (body.classList.contains('dark-mode')) {
          modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
          modeToggle.title = "Açık Tema";
          localStorage.setItem('theme', 'dark');
      } else {
          modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
          modeToggle.title = "Koyu Tema";
          localStorage.setItem('theme', 'light');
      }
  });

  searchIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      searchContainer.classList.toggle('active');
      if (searchContainer.classList.contains('active')) {
          searchInput.focus();
      }
  });

  searchInput.addEventListener('click', (e) => {
      e.stopPropagation();
  });

  document.addEventListener('click', () => {
      searchContainer.classList.remove('active');
  });

  searchInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
          console.log('Arama yapılıyor:', searchInput.value);
          // Burada gerçek arama işlevselliğini ekleyebilirsiniz
      }
  });

  const slider = document.querySelector('.slider-container');
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const dotsContainer = document.querySelector('.slider-dots');

  let currentSlide = 0;
  const slideCount = slides.length;

  slides.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dot');

  function updateSlider() {
      slider.style.transform = `translateX(-${currentSlide * 33.333}%)`;
      dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === currentSlide);
      });
  }

  function goToSlide(n) {
      currentSlide = (n + slideCount) % slideCount;
      updateSlider();
  }

  function nextSlide() {
      goToSlide(currentSlide + 1);
  }

  function prevSlide() {
      goToSlide(currentSlide - 1);
  }

  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  setInterval(nextSlide, 5000);
});

document.addEventListener('DOMContentLoaded', (event) => {
// Before-After Slider
const slider = document.getElementById('before-after-slider');
const afterImage = document.querySelector('.after-image');
slider.addEventListener('input', (e) => {
  const sliderValue = e.target.value;
  afterImage.style.clipPath = `inset(0 ${100 - sliderValue}% 0 0)`;
});

// Animated counters
const counters = document.querySelectorAll('.achievement-number');
const speed = 200;

counters.forEach(counter => {
  const animate = () => {
      const value = +counter.getAttribute('data-target');
      const data = +counter.innerText;
      const time = value / speed;
      if (data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
      } else {
          counter.innerText = value;
      }
  }
  animate();
});

// Story steps
const steps = document.querySelectorAll('.step');
let currentStep = 0;

function showNextStep() {
  steps[currentStep].classList.remove('active');
  currentStep = (currentStep + 1) % steps.length;
  steps[currentStep].classList.add('active');
}

setInterval(showNextStep, 5000); // Change step every 5 seconds
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  }
  
  // Sayfa yüklendiğinde dark mode tercihini kontrol et
  document.addEventListener('DOMContentLoaded', (event) => {
    const darkModePreference = localStorage.getItem('darkMode');
    if (darkModePreference === 'true') {
      document.body.classList.add('dark-mode');
    }
  });
  
  // Dark mode toggle butonuna event listener ekleyin
  document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);


  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    updateModeIcon(isDarkMode);
}

function updateModeIcon(isDarkMode) {
    const modeIcon = document.querySelector('.mode-toggle i');
    modeIcon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
}

document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
    updateModeIcon(isDarkMode);
});

document.querySelector('.mode-toggle').addEventListener('click', toggleDarkMode);