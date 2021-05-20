var resultContainer = document.getElementById('resultContainer');
resultContainer.innerHTML = `Setting up the environment! [${sum(10,20,30,40)}]`;

/* spread syntax example */
var nonRest = [1, 2, 3, 4];
resultContainer.innerHTML = `Setting up the environment! [${sumNonRest(...nonRest)}]`;

/* rest parameter example */
function sum(...inputs) {
    let result = 0;
    for(let i of inputs) {
        result += i;
    }
    return result;
}

function sumNonRest(a, b, c, d) {
    return (a + b + c + d);
}