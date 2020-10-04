//  1.Je vérifie toujours que ma page js et mon fichier html sont connectés :
alert('Salut JS');
// Déclarer un tableau INDEXE :
// 1-
var monTableau = []; // alt gr + 5
console.log(monTableau);
// b)

var myArray = new Array;
console.log(myArray);
// myArray et monTableau sont des tableaux qui peuvent contenir plusieurs informations


// Affecter des valeurs au tableau, plusieurs méthodes :
// a)
var nosPrenoms = ["Christian", "Philippe", "Mamadou", "Zitouni", "Sébastien", 15, 20];
console.log(nosPrenoms);
// b)

monTableau[0] = "Christian";
monTableau[1] = "Mamadou";
monTableau[2] = "Philippe";
monTableau[3] = "Sébastien";
monTableau[4] = "Zitouni";
monTableau[5] = 15;
monTableau[6] = 18;
console.log(monTableau);

// --Déclarer et affecter des valeurs à un objet.

var Coordonnee = {
    prenom: "Hugo",
    nom: "LIEGEARD",
    age: 82
};
console.clear(); //permet d'effacer les lignes de débug qui précède le console.clear()
console.log(Coordonnee); //j'affiche toutes les informations de mon tableau
console.log(Coordonnee['prenom']); // je n'affiche que le prénom
console.log(Coordonnee.nom); // je n'affiche que le nom
console.log(Coordonnee.age); // je n'affiche que l'age

//*--on va créer 2 tableaux indexé

var listeDePrenom = ["Oussmane", "Cherif", "Hugo"];
var listeDeNom = ["MAMA", "BENALLAL", "LIEGEARD"];
var Annuaire = [listeDePrenom, listeDeNom];

console.log(Annuaire)
document.write(); //fonction native de JS qui permet d'inscrire un résultat directement sur la page html et non plus sur console

document.write(Annuaire[0][2] + " " + Annuaire[1][2] + " " + Annuaire[1][1] + " " + Annuaire[0][0]);
document.write("<hr>");
document.write(Annuaire[0][0]);
document.write(" ");
document.write(Annuaire[1][1]);


//tableau à 2 dimensions non indexé

// var contact = [
//     {prenom: "Hugo", nom: "LIEGEARD", tel: "0783 97 15 15"},
//     {prenom: "Salim", nom: "SOUMARE", tel: "0783 97 13 14"},
//     {prenom: "Pransun", nom: "BALASUBRA", tel: "0783 97 18 19"}
// ];
// console.log(contact);
/*---------------------------------------------------\
/                         EXERCICE :-)               \
/           ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~  ~ ~ ~ ~   \
/        Créez un Tableau à deux dimensions          \
/   appelé "AnnuaireDesStagiares" qui contiendra     \
/ toutes les coordonnées pour chaque stagiaire.      \                               \
/                                                    \
/            Ex. Nom, Prénom, Tel                   \
\---------------------------------------------------*/



var AnnuaireDesStagiares = [
    { prenom: "Vincent", nom: "LEFEVRE", tel: "0783 97 15 15" },
    { prenom: "Sahar", nom: "FERCHICHI", tel: "0783 97 13 14" },
    { prenom: "Mamadou", nom: "DIABY", tel: "0783 97 18 19" }
];
console.log(AnnuaireDesStagiares);

//--exemple à 3 dimensions

var array3Dimension = [{
        prenom: "Hugo",
        nom: "LIEGEARD",
        coordonnees: {
            email: "hugo.liegeard@lepoles.com",
            tel: {
                fixe: "0596 108 328",
                fax: "0596 108 632",
                port: {
                    prive: "07 83 97 10 15",
                    pro: "07 83 97 15 15"
                }
            },
            adresse: {
                ville: "DUCOS",
                cp: "97224",
                region: "Martinique",
                pays: {
                    code: "FR",
                    nom: "FRANCE"
                }
            }
        }
    } //fermeture 1er {
]; //fin array3Dimension

console.log(array3Dimension);
console.log(array3Dimension[0].coordonnees.email);
//document.write(array3Dimension[0].coordonnees.email); // hugo.liegeard@lepoles.com
/*-----------------------
    AJOUTER UN ELEMENT 
-----------------------*/

var couleur = ['Rouge', 'Jaune', 'Vert'];
console.clear();
console.log(couleur);
console.log(couleur.length); //.lenght me permet d'afficher sur ma console le nombre d'élément que contient mon tableau
//document.write(couleur[1]); // jaune

//Pour ajouter un élélment dans mon tableau, je fais appel à la fonction push()
var nbElementsDeMonTableau = couleur.push('Violet');
console.log(couleur);
console.log(nbElementsDeMonTableau);

//pour ajouter un élément au début de mon tableau, je vais faire appel à la fonction unshift ()
console.clear();
var nbElementsDeMonTableau = couleur.unshift('Bisque', 'orange');
console.log(couleur);
console.log(nbElementsDeMonTableau);

// Pour supprimer un ou plusieurs éléments de mon tableau, je fais aappel à la fonction pop()
couleur.pop();
console.log(couleur);
console.log(nbElementsDeMonTableau);

// Pour supprimer le premier élément de mon tableau, j'utilise la fonction shift()
couleur.shift();
console.log(couleur);
console.log(nbElementsDeMonTableau);