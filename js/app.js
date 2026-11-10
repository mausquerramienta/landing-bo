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
    const formResenas = document.getElementById('formResenas');
    const formResenas = document.getElementById('formResenas');
    if (formResenas) {
        formResenas.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita que la página recargue o cambie
            const formData = new FormData(formResenas);
            
            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            })
            .then(() => {
                // Oculta el modal de llenar reseña
                const modalResena = bootstrap.Modal.getInstance(document.getElementById('modalResena'));
                modalResena.hide();
                
                // Limpia los campos del formulario
                formResenas.reset();
                
                // Muestra el nuevo modal de éxito
                const modalExito = new bootstrap.Modal(document.getElementById('modalExito'));
                modalExito.show();
            })
            .catch((error) => alert('Hubo un error al enviar la reseña. Por favor, intenta de nuevo.'));
        });
    }
});