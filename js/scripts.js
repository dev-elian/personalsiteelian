document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar todos los enlaces de navegación y los contenidos
    const navLinks = document.querySelectorAll('.showOnPC a[data-target]');
    const contents = document.querySelectorAll('.content');

    // Función para ocultar todos los contenidos
    const hideAllContents = () => {
        contents.forEach(content => {
            content.style.display = 'none';
        });
    };

    // Manejar clics en los enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevenir la acción por defecto del enlace

            // Ocultar todos los contenidos
            hideAllContents();

            // Mostrar el contenido correspondiente
            const targetId = link.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.style.display = 'block';
            }
        });
    });

    // Inicializar: Ocultar todos menos el primer contenido
    hideAllContents();
    const defaultContent = document.getElementById('content-1');
    if (defaultContent) {
        defaultContent.style.display = 'block';
    }
});


function toggleDescription(object, button) {
    if (object.style.display === "none") {
        object.style.display = "block";
        button.textContent = "Hide Details";
    } else {
        object.style.display = "none";
        button.textContent = "Show Details";
    }
}
