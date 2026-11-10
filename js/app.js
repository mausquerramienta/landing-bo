document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');

    navLinks.forEach(function(enlace) {
        enlace.addEventListener('click', function() {
            if (menuToggle.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(menuToggle);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });
});