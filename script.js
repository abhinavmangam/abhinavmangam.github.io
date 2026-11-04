const navLinks = [...document.querySelectorAll('.side-nav a')];
const sections = [...document.querySelectorAll('main section[id]')];
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    }
  });
}, { rootMargin: '-30% 0px -60% 0px' });
sections.forEach(section => observer.observe(section));

document.getElementById('contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(data.get('subject'));
  const body = encodeURIComponent(
    `Hello Abhinav,\n\n${data.get('message')}\n\nName: ${data.get('name')}\nEmail: ${data.get('email')}\nCompany: ${data.get('company') || 'Not provided'}`
  );
  document.getElementById('form-note').textContent = 'Opening your email application with the message prepared…';
  window.location.href = `mailto:abhinavmangam01@gmail.com?subject=${subject}&body=${body}`;
});