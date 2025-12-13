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

// Test des fonctions
console.log("Addition 5 + 3 =", addition(5, 3));
console.log("Soustraction 10 - 4 =", soustraction(10, 4));
console.log("Multiplication 6 * 7 =", multiplication(6, 7));
console.log("Division 15 / 3 =", division(15, 3));
