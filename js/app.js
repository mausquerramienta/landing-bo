document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');
    const navbar = document.querySelector('.navbar');

    navLinks.forEach(function(enlace) {
        enlace.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    if (menuToggle.classList.contains('show')) {
                        const bsCollapse = bootstrap.Collapse.getInstance(menuToggle);
                        if (bsCollapse) {
                            bsCollapse.hide();
                        }
                    }

                    setTimeout(() => {
                        const navbarHeight = navbar.offsetHeight;
                        const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - navbarHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }, 350); 
                }
            }
        });
    });
});