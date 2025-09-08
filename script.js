// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Typing effect for career objective
const careerText = "To obtain a challenging and growth-oriented DevOps Engineer position where I can leverage my experience in cloud platforms, CI/CD pipelines, infrastructure automation, and container orchestration to drive operational excellence, accelerate software delivery, and contribute to building resilient, scalable systems in a dynamic and innovative environment.";
let index = 0;
const careerElement = document.getElementById('career-objective');

function typeCareer() {
  if (index < careerText.length) {
    careerElement.textContent += careerText.charAt(index);
    index++;
    setTimeout(typeCareer, 20);
  }
}
typeCareer();

// Animate skills bars when section comes into view
const skills = document.querySelectorAll('.progress div');
const skillsSection = document.getElementById('skills');

window.addEventListener('scroll', () => {
  const sectionTop = skillsSection.getBoundingClientRect().top;
  const trigger = window.innerHeight - 100;
  if (sectionTop < trigger) {
    skills.forEach(bar => {
      bar.style.width = bar.style.width || bar.getAttribute('style').split(':')[1];
    });
  }
});

// Dark mode toggle
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

