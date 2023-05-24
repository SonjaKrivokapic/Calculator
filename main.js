
let currentValue = '';
let operator = '';
let previousValue = '';
 

    const previous = document.getElementById("previous");
    const current = document.getElementById("current");
    const numbers = document.querySelectorAll(".number");
    const operators = document.querySelectorAll(".operator");
    const clear = document.querySelector(".clear");
    const equal = document.querySelector(".equal");
    const decimal = document.querySelector(".decimal");
   
    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent);
        current.textContent = currentValue;
    }))
    operators.forEach((op) => op.addEventListener("click", function(e){
        console.log('test')
        handleOperator(e.target.textContent);
        previous.textContent = previousValue + " " + operator;
        current.textContent = currentValue;
    }))
    clear.addEventListener("click", function (){
        previousValue = "";
        currentValue = "";
        operator = "";
        previous.textContent = currentValue;
        current.textContent = currentValue;
    })

    equal.addEventListener("click", function(){
        if(currentValue != "" && previousValue != ""){
            calculate();
            previous.textContent = '';
            if(previousValue.length <=10){
                current.textContent = previousValue;
            } else {
                current.textContent = previousValue.slice(0,10) + "...";
            }
        }
        
    })
    decimal.addEventListener("click", function(){
        addDecimal();
    })


function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);

    if(operator === "+"){
        previousValue +=  currentValue;
    } else if (operator === "-"){
        previousValue -= currentValue;
    } else if (operator === "x"){
        previousValue *= currentValue;
    } else {
        previousValue /= currentValue;
    }
    // previousValue = roundNumber(previous);
    previousValue = previousValue.toString();
    currentValue = currentValue.toString();
    console.log(previousValue)
}

function roundNumber(num){
    return Math.round(num * 1000) / 1000;
}

function handleOperator(opr){
    operator = opr;
    previousValue = currentValue;
    currentValue = '';
}

function handleNumber(num){
    if(currentValue.length <= 10){
        currentValue += num;
    }    

}

function addDecimal(){
    if(!currentValue.includes(".")){
        currentValue += '.';
    }
}

