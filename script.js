let numberButtons = document.querySelectorAll('[data-number]');
let operationButtons = document.querySelectorAll('[data-operation]');
let equalsButton = document.querySelector('[data-equals]');
let deleteButton = document.querySelector('[data-delete]');
let allClearButton = document.querySelector('[data-all-clear]');
let displayText = document.querySelector('[data-display]');
let numberA = '';
let numberB = '';
let operation = undefined;


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.innerText);
        appendNumber(button.innerText);
        updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.innerText);
        chooseOperation(button.innerText);
        updateDisplay;
    })
})

allClearButton.addEventListener('click', button => {
    clear();
    updateDisplay();
});

deleteButton.addEventListener('click', button => {
    deleteNumber();
    updateDisplay();
});

equalsButton.addEventListener('click', button => {
    calculate();
    updateDisplay();
});

window.addEventListener("keydown", event => {
    if (event.key >= 0 && event.key <= 9) appendNumber(event.key), updateDisplay();
    if (event.key === ".") appendNumber(event.key), updateDisplay();
    if (event.key === "=" || event.key === "Enter") calculate(), updateDisplay();
    if (event.key === "Backspace") deleteNumber(), updateDisplay();
    if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/" || event.key === "%") chooseOperation(event.key.toString()), updateDisplay();
    else return;
  });

function keyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
    if (e.key === ".") appendNumber(e.key);
    if (e.key === "=" || e.key === "Enter") calculate();
    if (e.key === "Backspace") deleteNumber();
    if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/" || e.key === "%") chooseOperation(e.key.toString());
  }

function clear() {
    numberA = '';
    numberB = '';
    operation = undefined;
}

function deleteNumber() {
    numberB = numberB.toString().slice(0, -1);
}

function appendNumber(number) {
    if(number === '.' && numberB.includes('.')) return;
    numberB = numberB.toString() + number.toString();
}

function chooseOperation(operator) {
    if(numberB === '') return;
    if(numberA !== '') calculate();
    operation = operator;
    [numberA, numberB] = [numberB, ''];
    updateDisplay();
}

function calculate() {
    let result;
    let floatA = +numberA;
    let floatB = +numberB;

    if (isNaN(floatA) || isNaN (floatB)) return;
    
    switch(operation) {
        case '+':
            result = floatA + floatB;
            break
        case '-':
            result = floatA - floatB;
            break
        case '*':
            result = floatA * floatB;
            break
        case '/':
            if(floatB === 0){
                result = '';
                alert("LMAO 😂😂");
                break
            }
            result = floatA / floatB;
            break
        case '%':
            if(floatB === 0){
                result = '';
                alert("LMAO 😂😂");
                break
            }
            result = floatA % floatB;
            break
        default:
            return
    }
    clear();
    console.log('result is ' + result);
    numberB = result;
}

function roundNumber(){
    numberB = Math.round(number * 1000) / 1000;
}

function updateDisplay(){
    if(numberB.length > 50) roundNumber();
    displayText.innerText = numberB;
    console.log('display updated');
}