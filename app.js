let displayText = "";
let a = undefined;
let b = undefined;
let operator = undefined;

function main(opSymbol){
    a = displayText;
    operator = opSymbol;
    displayText= '';
}

function add(a, b){
    displayText= '';
    display((+a + +b));
}

function subtract(a, b){
    displayText= '';
    display((a - b));
}

function multiply(a, b){
    displayText= '';
    display((a * b));
}

function divide(a, b){
    displayText= '';
    display((a / b));
}

function remainder(a,b){
    displayText= '';
    display((a % b));
}

function equals(){
    if(a !== undefined && operator !== undefined){
        b = displayText;
        operate(a, operator, b);
        reset();
    }else{
        console.log("Error incomplete operation");
    }
}

function operate(a, operator, b){
    if(operator === "+"){
        add(a,b);
    }else if(operator === "-"){
        subtract(a,b);
    }else if(operator === "*"){
        multiply(a,b);
    }else if(operator === "/"){
        if(b === "0"){
            display('NOPE')
        }else {
            divide(a,b);
        }
    }else if(operator === "%"){
        if(b === "0"){
            display('NOPE')
        }else {
            remainder(a,b);
        }
    }
}

function display(value){
    if(displayText.includes(".") && value === '.'){
        console.log('second dot not allowed');
        return;
    }
    if(displayText === ''){
        clearDisplay();
    }

    if(displayText === "0" && value !== '.'){
        console.log('equals zero')
        displayText = ''
    }

    displayText += value;

    if(displayText.includes(".")){
        Math.round(displayText * 100) / 100
    }

    if(displayText.length > 17){
        console.log("Number Too Long");
        displayText = ''
        display("Too Long");
    }else {
        document.getElementById('displayText').textContent = displayText;
    }
}

function backSpace(){
    displayText = displayText.substring(0, displayText.length -1);
    document.getElementById('displayText').textContent = displayText;
}

function clearDisplay(){
    displayText = '';
    document.getElementById('displayText').textContent = displayText;
}

function reset(){
    a = undefined;
    b = undefined;
    operator  = undefined;
}

function newStart(){
    clearDisplay();
    reset();
}