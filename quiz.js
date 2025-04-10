function submitAnswers(answers){
    // On présume que toutes les questions ont 4 réponses et sont identifiables avec un id unique.
    // Chaque choix portera cet id avec une lettre ajoutée à la fin parmi les lettres a, b, c et d.
    // On va utiliser un dictionnaire contenant ces id à rechercher comme clé et la réponse à la question correspondant
    // à l'id indiqué en valeur.
    
    let score = 0;

    // Dictionnaire contenant les paires [id de la question] : [[réponse(s) à la question], bool : correspondance parfaite]
    let lookup = answers;

    // On compare les réponses données aux vraies réponses et on incrémente le score de 1 si elles sont correctes.
    for (let [uid, value] of Object.entries(lookup)) {
        let answer = value[0];
        let chosen = [];
        for (let letter of "abcd") { // On obtient les valeurs de tous les éléments contenant les réponses
            if (document.getElementById(uid+letter).checked) {
                chosen.push(document.getElementById(uid+letter).value);
            }
        }
        if (value[1] === true) { // Si on veut que la réponse donnée corresponde parfaitement à la "bonne" réponse
            if (JSON.stringify(chosen)===JSON.stringify(answer)) {
                score++;
            }
        } else { // Si on veut juste que la ou les réponse(s) donnée(s) soient dans la "bonne" réponse (pas besoin de correspondance parfaite);
            let scoreup = false; // si une mauvaise réponse est donnée aucun point n'est accordé même si des bonnes réponses sont données avec
            for (let i of chosen) {
                
                if (answer.includes(i)) {
                    scoreup = true;
                } else {
                    scoreup = false;
                    break;
                }
            }
            if (scoreup) {
                score++;
            }
        }
        
    }
    
    // On affiche le score.
    document.getElementById("resultat").innerHTML = "Vous avez "+String(score)+" points sur "+Object.keys(lookup).length+" !";

}

function quizSubmitAnswers(){
    let elts = {
        "Ar1":[["c"],true],
        "Ar2":[["a"],true],
        "Ar3":[["a","c","d"],false],
        "Ar4":[["c"],true],
        "Ar5":[["a","c","d"],false],

        "No1":[["b"],true],
        "No2":[["a","c"],false],
        "No3":[["a"],true],
        "No4":[["a","c"],false],
        "No5":[["b"],true],

        "Fo1":[["b"],true],
        "Fo2":[["a","c"],false],
        "Fo3":[["b"],true],
        "Fo4":[["c"],true],
        "Fo5":[["b"],true],

        "Ho1":[["c"],true],
        "Ho2":[["a","b","d"],false],
        "Ho3":[["c"],true],
        "Ho4":[["d"],true],
        "Ho5":[["b"],true],
    };
    submitAnswers(elts);
}