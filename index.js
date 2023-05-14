const counterEl = document.querySelector('[data-find="counterValue"]');
const addOnePoolButton = document.getElementById("addOnePoolButton");
const addTwoPoolsButton = document.getElementById("addTwoPoolsButton");
const resetButton = document.getElementById("resetButton");

console.log(addOnePoolButton.dataset);

const COUNTER_INITIAL_VALUE = 0;

let counter = COUNTER_INITIAL_VALUE;


addOnePoolButton.addEventListener('click', function() {
    counter = counter + addOnePoolButton.dataset.pools;
    console.log(counter, addOnePoolButton.dataset.pools);
    counterEl.innerText = counter;
});