document.addEventListener("DOMContentLoaded", function() {
    // Select all anchor links within the menu
    const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Get the target section's id from the href attribute
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Scroll to the target section smoothly using scrollIntoView
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

