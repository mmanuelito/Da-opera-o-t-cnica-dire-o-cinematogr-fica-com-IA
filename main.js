// JavaScript for Cinemática Avançada com IA - Glassmorphism Edition

document.addEventListener('DOMContentLoaded', () => {
    // Reveal Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    // Smooth Scrolling
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Parallax on Hero Image
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const hero = document.querySelector('#hero');
        if (scrolled < window.innerHeight) {
            hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
        }
    });

    // Copy Feedback (Visual Only, the Logic is in HTML)
    window.copyPrompt = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            // Create a small toasted feedback
            const toast = document.createElement('div');
            toast.className = 'glass';
            toast.style.position = 'fixed';
            toast.style.bottom = '2rem';
            toast.style.right = '2rem';
            toast.style.padding = '1rem 2rem';
            toast.style.zIndex = '2000';
            toast.style.border = '1px solid var(--accent)';
            toast.style.color = 'var(--accent)';
            toast.textContent = 'Prompt Copiado!';

            document.body.appendChild(toast);

            setTimeout(() => {
                toast.style.opacity = '0';
                setTimeout(() => toast.remove(), 500);
            }, 2000);
        });
    };
});
