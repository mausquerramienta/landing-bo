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

    // Modal del formulario de Netlify
    const formResenas = document.getElementById('formResenas');
    if (formResenas) {
        formResenas.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita que la página recargue
            
            const formData = new FormData(formResenas);
            formData.append("form-name", "resenas-clinica");
            
            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            })
            .then(() => {
                const modalResenaEl = document.getElementById('modalResena');
                let modalResena = bootstrap.Modal.getInstance(modalResenaEl);
                if (!modalResena) {
                    modalResena = new bootstrap.Modal(modalResenaEl);
                }
                modalResena.hide();
                
                formResenas.reset();
                
                const modalExito = new bootstrap.Modal(document.getElementById('modalExito'));
                modalExito.show();
            })
            .catch((error) => alert('Hubo un error al enviar la reseña.'));
        });
    }
});