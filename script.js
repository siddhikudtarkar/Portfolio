function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Simple dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});


// ===== SCROLL ANIMATION =====
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.3 };
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// ===== SCROLL TO SECTION =====
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
