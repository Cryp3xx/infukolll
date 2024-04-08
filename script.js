function calculateAverage() {
    const input = document.getElementById('numbersInput').value;
    const numbers = input.split(',').map(Number);
    const average = numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
    document.getElementById('average').textContent = `Průměr čísel v poli: ${average}`;
}

function findMinMax() {
    const input = document.getElementById('numbersInput').value;
    const numbers = input.split(',').map(Number);
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    document.getElementById('minMax').textContent = `Nejmenší číslo: ${min}, Největší číslo: ${max}`;
}

function changeLetterCase() {
    const input = document.getElementById('numbersInput').value;
    const upperCaseStr = input.toUpperCase();
    const lowerCaseStr = input.toLowerCase();
    document.getElementById('letterCase').textContent = `Původní řetězec: ${input}, Velká písmena: ${upperCaseStr}, Malá písmena: ${lowerCaseStr}`;
}

function combineArrays() {
    const input = document.getElementById('arrayInput').value;
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const numbers = input.split(',').map(Number);
    const combinedArray = array1.concat(array2, numbers);
    document.getElementById('combinedArray').textContent = `Kombinované pole: ${combinedArray}`;
}

function createAnimalObject() {
    const input = document.getElementById('animalInput').value;
    const animals = JSON.parse(`{${input}}`);
    document.getElementById('animalObject').textContent = `Objekt zvířat: ${JSON.stringify(animals)}`;
}

function checkElement() {
    const input = document.getElementById('elementInput').value;
    const set = new Set([1, 2, 3, 4, 5]);
    const elementToCheck = parseInt(input);
    const elementExists = set.has(elementToCheck);
    document.getElementById('checkElement').textContent = `Prvek ${elementToCheck} existuje v množině: ${elementExists}`;
}