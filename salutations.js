const utilisateurs = ["Ali", "Bilal", "Chams", "Dalil"];

function saluerUtilisateur(nom) {
    return `Bonjour ${nom}, bienvenue !`;
}

function saluerTous() {
    console.log("=== SALUTATIONS ===");
    utilisateurs.forEach(utilisateur => {
        console.log(saluerUtilisateur(utilisateur));
    });
    console.log("==================");
}

// Exécuter
saluerTous();
console.log(`Nombre d'utilisateurs: ${utilisateurs.length}`);

function ajouterUtilisateur(nom) {
    utilisateurs.push(nom);
    console.log(`${nom} a été ajouté à la liste !`);
}

// Tester la nouvelle fonction
ajouterUtilisateur("Émilie");
saluerTous();
