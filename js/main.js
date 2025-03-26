// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Lazy load videos
document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video[data-src]');
    const videoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                video.src = video.dataset.src;
                observer.unobserve(video);
            }
        });
    });

    videos.forEach(video => videoObserver.observe(video));
}); 