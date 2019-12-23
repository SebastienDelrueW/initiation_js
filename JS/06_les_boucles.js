// les Boucles
// //  1.Je vérifie toujours que ma page js et mon fichier html sont connectés :
// alert('Okay JS');

//Il y a différentes types de boucle, les plus utilisées sont la boucle "FOR" et la boucle "WHILE"
//*-* Boucle FOR() :
for(let i = 0; i<= 5; i++){
    document.write('<p>Nombre de tour(s) de boucle(s) : <em style="background:yellow;">'+ i +'</em></p>');
}
document.write("<hr>");

/*
Pour i = 0 => j'initialise le départ de ma boucle à 0
Pour i<= 5; => tant que la valeur de i est inférieur ou égale à 5 
i++; => j'incrémente (j'ajoute) un tour de boucle 

En gros je donne l'instruction de faire un tour de boucle supplémentaire dans que la valeur de i n'est pas égal ou supérieur à 5
*/

// la boucle WHILE

var j = 0;
while (j <= 5){
    document.write('<p>Nombre de tour(s) de boucle(s) : <em style="background:yellow;">' + j + '</em></p>');
    // ATTENTION A NE PAS OUBLIER L'INCREMENTATION
    j++;
}
document.write("<hr>");



/* -----------------------------
            EXERCICE
------------------------------ */

// -- Supposons le tableau suivant :
var Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Jacques', 'Hugo'];

/**
 * CONSIGNE : Grâce à une boucle FOR, 
 * affichez la liste des prénoms
 * du tableau ci-dessus dans la console, 
 * ou sur votre page.
 */


 console.log(Prenoms);


for (let i = 0; i < Prenoms.length; i++) {
    document.write('<p> Jean   Marc   Matthieu   Luc   Pierre   Paul  Jacques   Hugo   : <em style="background:yellow;">' + i + '</em></p>');

console.log(Prenoms[i]);
}

document.write("<hr>");













