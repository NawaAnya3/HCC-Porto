const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const contactForm = document.getElementById('contactForm');

const savedTheme = localStorage.getItem('ayu-theme');
if (savedTheme === 'light') {
  root.setAttribute('data-theme', 'light');
  if (themeToggle) themeToggle.innerHTML = '<span class="toggle-icon">☀️</span>';
} else {
  root.setAttribute('data-theme', 'dark');
  if (themeToggle) themeToggle.innerHTML = '<span class="toggle-icon">🌙</span>';
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme');
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';

    root.setAttribute('data-theme', nextTheme);
    localStorage.setItem('ayu-theme', nextTheme);
    themeToggle.innerHTML = nextTheme === 'light'
      ? '<span class="toggle-icon">☀️</span>'
      : '<span class="toggle-icon">🌙</span>';
  });
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name')?.value?.trim() || 'Pengirim';
    const subject = document.getElementById('subject')?.value?.trim() || 'Pesan baru';

    alert(`Terima kasih, ${name}! Pesan Anda mengenai "${subject}" telah diterima. Saya akan segera menghubungi Anda.`);
    contactForm.reset();
  });
}
