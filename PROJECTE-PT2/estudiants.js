// Treballarem sempre amb una variable global, obj, què és una taula on estan 
// guardats tots els accidents de l'any. Qualsevol altre variable que necessitem
// haurà de ser, necessàriament, una variable local.

// Com que al document html no hi ha controladors d'esdeveniments, els haurem de crear aquí:



// Teniu ja definides les funcions de cada exercici (menys del cinquè), només cal
// que ompliu el codi necessari.
function mostrarResultat(id, contingut) {
    const resultatDiv = document.getElementById("resultats");
    resultatDiv.innerHTML = ""; // Netejar contingut anterior
    const result = document.createElement("div");
    result.id = id;
    result.innerHTML = contingut;
    resultatDiv.appendChild(result);
}

function exercici01() {
    
    let totalAccidents = obj.length; // El total es simplemente la longitud del array
    const resultats = document.getElementById("resultats");
    resultats.innerHTML = `<h3>Total d'accidents: ${totalAccidents} </h3>`;
    
    
}

function exercici02() { 
    let accidentsByDay = {};
        obj.forEach((accident) => {
            let dia = accident.Diaset;
            if (!accidentsByDay[dia]) {
                accidentsByDay[dia] = 0;
            }
            accidentsByDay[dia]++;
        });
    
        // Encontrar el día con más accidentes
        let diaMax = "";
        let maxAccidents = 0;
    
        for (let dia in accidentsByDay) {
            if (accidentsByDay[dia] > maxAccidents) {
                maxAccidents = accidentsByDay[dia];
                diaMax = dia;
            }
        }
    
        const resultats = document.getElementById("resultats");
        resultats.innerHTML = `<h3>Dia amb més accidents: ${diaMax} (${maxAccidents} accidents)</h3>`;    
}


function exercici03() {
   
        let accidentsByDistrict = {};
    
        obj.forEach((accident) => {
            let districte = accident.nDist || "Altres";
            if (!accidentsByDistrict[districte]) {
                accidentsByDistrict[districte] = 0;
            }
            accidentsByDistrict[districte]++;
        });
    
        const resultats = document.getElementById("resultats");
        resultats.innerHTML = "<h3>Accidents per districte:</h3>";
    
        let ul = document.createElement("ul");
        for (let districte in accidentsByDistrict) {
            let li = document.createElement("li");
            li.textContent = `Districte ${districte}: ${accidentsByDistrict[districte]} accidents`;
            ul.appendChild(li);
        }
    
        resultats.appendChild(ul);

    
}

// ajudat amb chatgpt
function exercici04() {
    creaFormulari(); 

    const select = document.getElementById("districtes");
    select.addEventListener("change", () => {
        let selectedDistrict = select.value;
        let total = 0;

        obj.forEach((accident) => {
            if (accident.districte === selectedDistrict) {
                total++;
            }
        });

        const resultats = document.getElementById("resultats");
        resultats.innerHTML = `<h3>Total d'accidents al districte "${selectedDistrict}": ${total}</h3>`;
    });
}

// Afegir esdeveniments a les opcions del menú
document.getElementById("exer01").addEventListener("click", exercici01);
document.getElementById("exer02").addEventListener("click", exercici02);
document.getElementById("exer03").addEventListener("click", exercici03);
document.getElementById("exer04").addEventListener("click", exercici04);
