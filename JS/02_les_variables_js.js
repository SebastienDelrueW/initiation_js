
//  1.Je vérifie toujours que ma page js et mon fichier html sont connectés :
// alert('Salut JS');

// alert("Salut");

// deux slashes pour un commentaire sur la ligne (ctrl + /)
/*
(shift + alt+a)
ici un commentaire sur plusieurs lignes

*/

/*
2 manières d'afficher une boite de dialogue :

 => alert('Super, tu es arrivée sur mon site !')
 => prompt('Question : on est quel jour ?'); avec la fonction prompt je dialogue directement avec l'utilisateur */

//  Lorsque l'on a besoin de stoker une information on utilise une variable. Une variable peut-être interprété comme une boite dans laquelle nous allons stocker une information.

// Il EXISTE PLUSIEURS TYPE DE VARIABLE

// */

//pour déclarer une variable (La créer) :
var prenom;

//pour lui affecter une valeur :
var prenom = 'Sébastien';


const PRENOM2 = 'Jean';
const MAJEUR = '18';
// variable qui ne bouge pas


// afficher la valeur variable
// pour tester une valeur on ouvre la console dans le navigateur (f12) puis on écrit le nom de variable à droite des ">>" puis ENTER

// b-Afficher une alerte avec la variable (NE PAS METTRE DE GUILLEMETS) 
// alert(prenom);

// c- On écrit dans le script (code)
console.log(prenom);
console.log(prenom2);

// Il est possible d'écrire plusieurs variables sur une seule ligne :
var nb1, nb2, nb3;
// & d'y affecter des valeurs :
nb1 = 1;
nb2 = 50;
nb3 = 220;

// Une instruction se termine TOUJOURS par un point virgule.

// Le nom d'une variable peut comporter des lettres et des chiffres mais exclut les signes de ponctuation (espace, accent...).

// /!\ Le JS EST SENSIBLE A LA CASSE /!\ (alt gr+ 8 pour avoir "\")

/* 
  mavariable différent de maViable ou ma_variable

*/

// ecriture snake case => ma_variable 
// ecriture camelCase => maVariable

/********************** 
LES TYPES DES VARIABLES 
***********************/
// -- typeof, me permet de connaitre le type de ma variable:
console.log(typeof prenom);

// -- Déclaration et affectation d'un nombre :
var Age = 40;
console.log(typeof Age);

// -- Les variables de type FLOAT
var uneDecimal = -2.984;
console.log(typeof uneDecimal);// La console retourne "number" donc un / des chiffres

// -- Les variables de type Booléens (boolean)
// LE BOOLEAN permet de vérifier si l'information est VRAI (true) ou FALSE (faux)
var unBoolean = false;// true
console.log(unBoolean);// retourne false
console.log(typeof unBoolean);// retourne boolean

// --Les CONSTANTES

// La déclaration CONST permet de créer une constante accessible UNIQUEMENT en lecture. Sa valeur ne pourra pas être modifiée par des réaffectations ultérieurs. Une constante ne peut pas être déclarée de nouveau.

const HOST ="localhost";
const USER ="root";
const PASSWORD ="mysql";
/*
Donc il est impossible de faire cela :
// const USER = "Sébastien";
La console me retournera => SyntaxError: redéclaration of const USER
*/
// Dans la convention on écrit les constantes en majuscule pour les reconnaitre.
var unNombre = "24";
console.log(unNombre);// affiche 24
console.log(typeof unNombre);// retourne string (chaine de caractère)

// pour convertir le string (chaine de caractère) "24" en number :
unNombre = parseFloat(unNombre);  // parsefloat permet d'interpréter le string 24 en chiffre 24
console.log(unNombre);// affiche 24
console.log(typeof unNombre); // retourne number


// pour convertir un chiffre en string
var nb4 = 93;
console.log(nb4);// affiche 93
console.log(typeof nb4);// la console interprète le nb4 comme un chiffre

nb4 = nb4.toString(); // toString() permet de convertir un nombre entier ou décimal en chaine de caractère (string).
console.log(typeof nb4);
