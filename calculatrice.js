// calculatrice.js
function addition(a, b) {
    return a + b;
}

function soustraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        return "Erreur: division par zéro!";
    }
    return a / b;
}

function puissance(a, b) {
    return Math.pow(a, b);
}

function racineCarree(a) {
    if (a < 0) {
        return "Erreur: nombre négatif!";
    }
    return Math.sqrt(a);
}


function puissance2(a, b) {
    return a ** b;
}


// Test des fonctions
console.log("Addition 5 + 3 =", addition(5, 3));
console.log("Soustraction 10 - 4 =", soustraction(10, 4));
console.log("Multiplication 6 * 7 =", multiplication(6, 7));
console.log("Division 15 / 3 =", division(15, 3));

console.log("\n=== NOUVELLES FONCTIONS ===");
console.log("Puissance 2^3 =", puissance(2, 3));
console.log("Racine carrée de 9 =", racineCarree(9));
console.log("Racine carrée de -4 =", racineCarree(-4));

