// Theme Toggle Logic
const btn = document.getElementById('theme-toggle');
btn.addEventListener('click', () => {
    document.body.classList.toggle('light');
});

// Scroll Reveal Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(section => {
    observer.observe(section);
});