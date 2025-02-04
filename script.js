document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    pages.forEach(page => {
        observer.observe(page);
    });
});