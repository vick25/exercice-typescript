//Écrivez une fonction add qui prend deux nombres en entrée et retourne leur somme.
function add(a: number, b: number): number {
    return a + b;
}

console.log(add(5, 3));
console.log(add(-2, 7));

// Écrivez une fonction isEven qui prend un nombre en entrée et retourne true si le nombre est pair, false sinon.
function isEven(n: number): boolean {
    return n % 2 === 0;
}

console.log(isEven(2)); // true
console.log(isEven(3)); // false

function toUpperCaseString(input: string): string {
    return input.toUpperCase();
}

// Écrivez une fonction getFirstElement qui retourne le premier élément d'un tableau.
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(['a', 'b', 'c'])); // 'a'

// Écrivez une fonction containsWord qui vérifie si une chaîne contient un mot donné.
function containsWord(phrase: string, mot: string): boolean {
    return phrase.includes(mot);
}
