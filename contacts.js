/* 
Activité : gestion des contacts
*/


//Affiche un Message d'accueil
console.log("Bienvenue dans le gestionnaire des contacts !");


//Initialisation des variables
var choix = "Initialisation";
var contact = {
    nom: "",
    prenom: "",
	decrire: function(){
 		var description = "Nom : " + this.nom + ", prénom : " + this.prenom;
        return description;
    }
};
var contacts =[];

//Création des premiers contacts
var contact1 = Object.create(contact);
	contact1.nom = "Nelson";
	contact1.prenom = "Jean-Marc";
var contact2 = Object.create(contact);
	contact2.nom = "Devisse";
	contact2.prenom = "Bob";
	contacts.push(contact1);
	contacts.push(contact2);

//Boucle tant que l'utilisateur ne choisie pas de quitter le programme (choix 2)
while (choix != 0) {

	//Affiche les Commandes de l'interface utilisateur
	console.log("");
	console.log("1 : Lister les contacts");
	console.log("2 : Ajouter un contact");
	console.log("0 : Quitter");
	console.log("");

	//Affiche le message de saisie
	var choix = prompt("Choisissez une option :");

	//Cas du choix 1
	if (choix==1) {
			console.log("Voici la liste de tous vos contacts :");
			contacts.forEach(function (contact) {
			    console.log(contact.decrire());
			});
	} else {
		
		//Cas du choix 2
		if (choix==2){
				var nouveauContact = Object.create(contact);
				nouveauContact.nom  = prompt("Entrez le nom du nouveau contact :");
				nouveauContact.prenom  = prompt("Entrez le prénom du nouveau contact :");
			 	contacts.push(nouveauContact);

		} else {
			
			//Cas d'une saisie incorrecte
			if (choix!=0 && choix!=1 && choix!=2) {
				console.log("Votre choix ne fait partie d'aucune des propositions");
			};

		};

	};

};
console.log("Au revoir !");