document.getElementById("enviar").addEventListener("click", enviarFormulari);
document.getElementById("esborrar").addEventListener("click", esborrarFormulari);
//llegim totes les variables del formulari




const password = document.getElementById("contrasenya");
const confirmPassword = document.getElementById("confirmar-contrasenya");
const privacitat = document.getElementById("privacitat");
const resultat = document.getElementById("resultat");

// creem la funció enviar formulari dins d'ella hi ha totes les accions per enviar el formulari
function enviarFormulari () {
let error=false
// NOM i cognom 
    //Agafa el valor del formulari en id NOM i passa la primera lletra de cada paraula a mayusula
    const nom = document.getElementById("nom");
    const paraules = nom.value.split(" "); // Separem cada paraula
    for (let i = 0; i < paraules.length; i++) {
    if (paraules[i].length > 0) {
    // Posem la primera lletra en majúscula i la resta en minúscula
        paraules[i] =
        paraules[i][0].toUpperCase() + paraules[i].slice(1).toLowerCase();
    }
}
nom.value = paraules.join(" "); // Reassignem el valor al camp


// per saber si edad te resposta, si no te resposat apareix un error
    const edats = document.getElementById("edat")
    if (edats.value === "") {
        document.getElementById("error-edat").textContent= "Selecciona un rang d'edats";
        error=true
    } 
    else {
        document.getElementById("error-edat").textContent= "";
    }

    // es comprova que nomes hi ha 5 digits
    const postal = document.getElementById("codi-postal");
    if (postal.value.length !== 5) { // Comprovem si la longitud és diferent de 5
        document.getElementById("error-codi").textContent = "El codi postal ha de tenir exactament 5 dígits.";
        error=true
    } else {
        document.getElementById("error-codi").textContent = "";
    }
        
    
    // comprova que el correu te @, nomes una i un punt despres de @
    const emails = document.getElementById("email");
    if (!emails.value.includes("@") && !emails.value.includes(".") && !emails.value.indexOf("@") > emails.value.lastIndexOf(".")) {
        document.getElementById("error-email").textContent= "Error en el email";
        error=true
    }
    else{
        document.getElementById("error-email").textContent="";
    }

    //Contrasenya
    

    //Contrasenyas iguals
    const password = document.getElementById("contrasenya");
    const confirmPassword = document.getElementById("confirmar-contrasenya");
    if (password!==confirmPassword) {
        document.getElementById("error-confirmar").textContent="Les contrasenyes no coincideixen";
        error=true
    }
    else{
        document.getElementById("error-confirmar").textContent="";
    }

    //privacitat
    const privacitat = document.getElementById("privacitat");
    if (!privacitat.checkVisibility) {
        document.getElementById("error-privacitat").textContent="Falta confirmar privacitat";
        error=true
    }
    else {
        document.getElementById("error-privacitat").textContent="";
    }
    if (error===true) {
        document.getElementById("resultat").textContent="Revisar Errors";
    }
    else{
        document.getElementById("resultat").textContent="Formulari enviat correctament";
    }

}

  
function esborrarFormulari () {
    form.reset();
    document.querySelectorAll(".error").forEach((error) => (error.textContent = ""));
    document.getElementById("resultat").textContent="";
}
