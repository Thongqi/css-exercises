
document.addEventListener('DOMContentLoaded', () => {
    var buttons = document.querySelectorAll('button')
    var firstValue
    var secValue
    var operator
    var result

    buttons.forEach((button) => {
        
        button.addEventListener('click', (e) => {
            var value = e.target.getAttribute('data-value')
            console.log(value)

            // clear value
            if (value == 'clear'){
                firstValue = secValue = operator = ''
            }

            // after first operation, if number is clicked, clear all value
            // if operator is clicked, store the result as firstvalue
            if (result && !parseInt(value)){
                firstValue = result
                result = ''
            }
            else{
                result = ''
            }

            

            // if +-*/= is press, store the first string
            if (parseInt(value)){
                if (operator){
                    secValue = secValue? secValue + value: value
                }
                else{
                    firstValue = firstValue? firstValue + value: value
                    console.log(firstValue, secValue)
                    
                }
                
            }
            else{
                if(!secValue){
                    operator = value
                    console.log(operator)
                }
                else if (operator){
                    //perform operation
                    console.log(firstValue)
                    result = operation(firstValue, secValue, operator)
                    display(result)

                    // clear stored value
                    firstValue = secValue = operator = ''
                    operator = value
                }
                else{
                    //donothing
                }
            }

            if(!result){
                display(firstValue, operator, secValue)
            }
            

            
        })
    })

})

function add(num1, num2) {
    return num1 + num2  
  };
  
function subtract(num1, num2) {
      return num1 - num2?(num1 - num2):'0'
  };
  
function sum(array) {
    return array.reduce((acc, val) =>
       acc + val, 0)
      
};
  
function multiply(num1, num2) {
    return num1 * num2
};

function divide(num1, num2){
    if (num2 == '0'){
        return '(っ °Д °;)っdont divide by 0'
    }
    else{
        return num1 / num2
    }
}

function checkCase(value){
    switch (value) {
        case add:
            return 'add'
            
            break;
    
        default:
            break;
    }
}

function operation(num1, num2, operator){
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    switch (operator){
        case 'add':
            return add(num1, num2)
        case 'subtract':
            return subtract(num1, num2)
        case 'multiply':
            return multiply(num1, num2)
        case 'divide':
            return divide(num1, num2)
    }
}

function joinNumber(array){
    return parseInt(array.join(''))
}

function display(...array){
    if (array.length <= 1){
        document.querySelector('.display').innerHTML = array[0]
    }
    else{
        document.querySelector('.display').innerHTML = array.join('')
    }
    
}

function getValue(e){
    
}

