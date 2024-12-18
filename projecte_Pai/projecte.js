document.getElementById("enviar").addEventListener("click", enviarFormulari);
document.getElementById("esborrar").addEventListener("click", esborrarFormulari);
//llegim totes les variables del formulari



const email = document.getElementById("email");
const password = document.getElementById("contrasenya");
const confirmPassword = document.getElementById("confirmar-contrasenya");
const privacitat = document.getElementById("privacitat");
const resultat = document.getElementById("resultat");

// creem la funció enviar formulari dins d'ella hi ha totes les accions per enviar el formulari
function enviarFormulari () {

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
        edats.focus();
        errors=true
    } 
    else {
        document.getElementById("error-edat").textContent= "";
    }

    // es comprova que nomes hi ha 5 digits
    const postal = document.getElementById("codi-postal");
    for (let i = 0; i < postal.length  ; i++ ) {
        if ( i < 5){
            document.getElementById("error-codi").textContent="error 5 digits";
        }
        else{
            document.getElementById("error-codi").textContent="";
        }

    }
        
    
    // comprova que el correu te @, nomes una i un punt despres de @
    const emails = document.getElementById("email");
    if (!emails.value.includes("@") && !emails.value.includes(".") && !emails.value.indexOf("@") > emails.value.lastIndexOf(".")) {
        document.getElementById("error-email").textContent= "Error en el email";
    }
    else{
        document.getElementById("error-email").textContent="";
    }
}

   
// Posem les primeres lletres en majuscula
    

  
function esborrarFormulari () {
    document.getElementById("Formulari").reset();
    document.querySelectorAll(".error").forEach((error) => (error.textContent = ""));
}
