//  1.Je vérifie toujours que ma page js et mon fichier html sont connectés :
//alert('Salut JS');


/* Les opérateurs arithmétiques */

// l'addition
// 1 Déclaration et affectation de plusieurs variables :

var nb1, nb2, resultat;

nb1 = 10;
nb2 = 5;

// L'addition de nb1 & nb2 avec l'opérateur " + "
resultat = nb1 + nb2;
console.log( resultat);

// La soustraction de nb1 & nb2 avec l'opération " - "
resultat = nb1 - nb2;
console.log(resultat);

// La division de nb1 & nb2 avec l'opération " / "
resultat = nb1 / nb2;
console.log(resultat);

// La multiplication de nb1 & nb2 avec l'opération " * "
resultat = nb1 * nb2;
console.log(resultat);

/* 
Le modulo correspond au reste de la division.
Le modulo de nb1 & nb2 avec l'opérateur " % "

*/
resultat = nb1 % nb2;
console.log(resultat);

/****************
 LES ECRITURES SIMPLIFIEES
 
 ************/

//  Addition

// je veux créer ma variable nb1 et je lui affecte une valeur 15 (avec le symbole =)
nb1 = 15;
// première variante :
// pour ajouter 5 à ma valeur de 15, je réaffecte à ma variable une nouvelle instruction :
// je lui dit que ma variable nb1 sera maintenant le résultat de ma valur de base (donc 15) auquel je lui rajoute 5 :
/* ma variable    La valeur de référence      */
        // nb1 =              nb1               + 5; //

// nb1 = nb1 + 5; // ici on dit que le resultat final de nb1 est la somme de notre variable +5

// console.log(nb1);//retourne 20 donc 15 + 5

// nb1= nb1 + 5;
// console.log(nb1);

// deuxième variante
nb1 += 5;// ce qui est équivalent à écrire nb1 = nb1 +5
console.log(nb1)
/* Je peux procéder de la même manière pour tous les autres opérateurs arithmétiques :
" + ", " - ",  " * ", " / " et " % " 
*/

