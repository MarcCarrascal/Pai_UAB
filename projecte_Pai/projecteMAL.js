document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("Formulari");
    const resultat = document.getElementById("resultat");
    const enviar = document.getElementById("enviar");
    const esborrar = document.getElementById("esborrar");

    // Validación al enviar el formulario
    enviar.addEventListener("click", () => {
        clearErrors(); // Limpiar errores previos

        const nomCognom = document.getElementById("nomCognom");
        const edat = document.getElementById("edat");
        const codi = document.getElementById("codi");
        const email = document.getElementById("email");
        const contrasenya = document.getElementById("contrasenya");
        const confirmarContrasenya = document.getElementById("confirmar-contrasenya");
        const privacitat = document.getElementById("privacitat");

        // Validación Nom i Cognoms
        if (!nomCognom.value.trim()) {
            showError("error-nom", "El nom i cognoms són obligatoris.");
            nomCognom.focus();
            return;
        }

        // Validación Edat
        if (edat.value === "") {
            showError("error-edat", "Has de seleccionar un rang d'edat.");
            edat.focus();
            return;
        }

        // Validación Codi Postal
        if (codi.value.length !== 5 || isNaN(codi.value)) {
            showError("error-codi", "El codi postal ha de tenir exactament 5 xifres.");
            codi.focus();
            return;
        }

        // Validación Email
        if (!email.value.includes("@") || !email.value.includes(".") || email.value.indexOf("@") > email.value.lastIndexOf(".")) {
            showError("error-email", "El correu electrònic no és vàlid.");
            email.focus();
            return;
        }

        // Validación Contrasenya
        if (contrasenya.value.length < 8) {
            showError("error-contrasenya", "La contrasenya ha de tenir almenys 8 caràcters.");
            contrasenya.focus();
            return;
        }

        // Confirmar Contrasenya
        if (contrasenya.value !== confirmarContrasenya.value) {
            showError("error-confirmar", "Les contrasenyes no coincideixen.");
            confirmarContrasenya.focus();
            return;
        }

        // Validación Checkbox Privacitat
        if (!privacitat.checked) {
            showError("error-privacitat", "Has d'acceptar la política de privacitat.");
            return;
        }

        // Mostrar resultat si todo está correcto
        resultat.innerHTML = `
            Formulari enviat correctament.<br>
            Nom i Cognoms: ${nomCognom.value}<br>
            Rang d'edat: ${edat.value}<br>
            Codi Postal: ${codi.value}<br>
            Correu Electrònic: ${email.value}
        `;
    });

    // Limpiar el formulario con el botón "Esborrar"
    esborrar.addEventListener("click", () => {
        form.reset();
        clearErrors();
        resultat.innerHTML = "";
    });

    // Función para mostrar errores
    function showError(id, message) {
        const errorElement = document.getElementById(id);
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    // Función para limpiar todos los mensajes de error
    function clearErrors() {
        document.querySelectorAll(".error").forEach((error) => (error.textContent = ""));
    }
});
