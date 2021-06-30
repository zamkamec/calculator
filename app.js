let displayText = "";
let a = undefined;
let b = undefined;
let operator = undefined;
let isThereError = false;

// Long Numbers
// Keyboard Support

function main(operatorSymbol){
    if(displayText === ""){
        return
    }

    if(a !== undefined){
        b = displayText;
        a = operate(a, operator, b);
        b = undefined;
        operator  = undefined;
        clearDisplay();
        display(a);
    }

    operator = operatorSymbol;
    a = displayText;
    displayText = '';
}

function equals(){
    if(a !== undefined && operator !== undefined && displayText !== ""){
        b = displayText;
        clearDisplay();
        console.log(operate(a, operator, b))
        display(operate(a, operator, b));
        reset();
    }else{
        console.log("Error incomplete operation");
    }
}

function operate(a, operator, b){
    // return yerine result ve sonda decimal ve sayi uzunlu[u checkle ve biter burda gg wp amk
    if(operator === "+"){
        return(+a + +b);
    }else if(operator === "-"){
        return(a - b);
    }else if(operator === "*"){
        return(a * b);
    }else if(operator === "/"){
        if(b === "0"){
            isThereError = true;
            errorMsg("Cannot Divide By 0");
        }else {
            return(a / b);
        }
    }else if(operator === "%"){
        if(b === "0"){
            isThereError = true;
            errorMsg("Cannot Divide By 0");
        }else {
            return(a % b);
        }
    }
}

function display(value){
    if((displayText.includes(".") && value === '.') || displayText.length > 17 || isThereError === true){
        return;
    }

    if(displayText === "0" && value !== '.'){
        console.log('equals zero')
        displayText = ''
    }

    displayText += value;

    // if(displayText.includes(".")){
    //     Math.round(displayText * 100) / 100
    // }

    document.getElementById('displayText').textContent = displayText;

}

function errorMsg(errorText){
    document.getElementById('displayText').textContent = errorText;
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
    isThereError = false;
}

function newStart(){
    clearDisplay();
    reset();
}