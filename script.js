let numbersButtons = document.querySelectorAll(".number");
let clearButton = document.querySelector("#clear");
let plusMinusButton = document.querySelector("#plusminus");
let clearAllButton = document.querySelector("#all-clear");
let equalButton = document.querySelector("#equal");
let operators = document.querySelectorAll(".operator");

let screen = document.querySelector(".calcul");
let preview = document.querySelector(".preview");

let number1 = null;
let number2 = null;
let result = null;
let actualOperator = "";


numbersButtons.forEach((number)=>{
    number.addEventListener("click",(e)=>{
        if(screen.textContent == 0)screen.textContent = "";
        screen.textContent += e.target.id;

    })
})


operators.forEach((operator)=>{
    operator.addEventListener("click",(e)=>{

        if(number1 != null){
            number2 = parseFloat(screen.textContent);
            equal();
            return;
        }
        number1 = parseFloat(screen.textContent);
        previewDisplay(number1);
        actualOperator = e.target.textContent;
        screen.textContent = 0;
        preview.textContent +=  e.target.textContent;
    })
})

function clear(){
    let nums= screen.textContent;
    let allNumbers = nums.split("");
    let lastNumber =  allNumbers[allNumbers.length-1];
    if(allNumbers.length>1  && (!isNaN(lastNumber) || lastNumber == ".") ){
        
        allNumbers.pop();
        screen.textContent = allNumbers.join("");
    }else{
        screen.textContent = 0;
    }
}



function clearAll(){
    screen.textContent = 0;
    preview.textContent = 0;
    number1 = null;
    number2 = null;
    result = null;
    
}

function plusMinus(){
    screen.textContent = parseFloat(screen.textContent) * - 1;
}

function display(content){
    screen.textContent =  content;
}

function previewDisplay(content){
    preview.textContent += content;
}

function equal(){
    number2 =  parseFloat(screen.textContent);
    previewDisplay(number2);

    if(actualOperator === "/"){
        if(number2 === 0){
            return;
        }else{
            result = number1 / number2;
        }
    }else if(actualOperator === "+"){
        result = number1 + number2;
    }else if(actualOperator === "-"){
        result = number1 - number2;
    }else if(actualOperator === "*"){
        result = number1 * number2;
    }

    (result % 1 === 0) ? Math.round(result) :result = result.toFixed(3);
    display(result);
    preview.textContent = "";
    number1 = null;
    number2 = null;
}


clearButton.addEventListener("click",clear);
clearAllButton.addEventListener("click",clearAll);
plusMinusButton.addEventListener("click",plusMinus);
equalButton.addEventListener("click",equal);
