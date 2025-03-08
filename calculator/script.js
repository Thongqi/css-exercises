const oprArray = {
    'add':'+', 
    'subtract':'-', 
    'multiply':'×', 
    'divide':'÷',
}

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

            //delete
            if(value == 'delete'){
                var returnValue = delete(firstValue, operator, secValue)
                firstValue = returnValue[0]
                operator = returnValue[1]
                secValue = returnValue[2]

            }

            
            // after first operation, if number is clicked, clear all value
            // if operator is clicked and is not 'clear', store the result as firstvalue       
            if(result && !parseInt(value) && value != 'clear' && value != 'delete' && value != '.'){
                operator = oprArray[value]
                firstValue = result
                result = ''
            }
            else{
                result = ''
            }
            
            
            

            // if +-*/= is press, store the first string
            if (parseInt(value) || value == '0' || value == '.'){
                if (operator){
                    secValue = secValue? secValue + value: value
                }
                else{
                    firstValue = firstValue? firstValue + value: value
                    console.log(firstValue, secValue)
                    
                }
                
            }
            else{
                if(!secValue && value != 'clear'){
                    operator = oprArray[value]
                    console.log(operator)
                }
                else if (operator){
                    //perform operation
                    console.log(firstValue)
                    result = operation(firstValue, secValue, operator)
                    display(result)

                    // clear stored value
                    firstValue = secValue = operator = ''

                    // if equal is not pressed, but the other operatoe is pressed, 
                    // store the value in operator      
                    if(value != 'equal'){
                        operator = oprArray[value]
                        firstValue = result
                        result = ''
                    }

                }
                else{
                    //donothing
                }
            }

            if(!result && value){
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
        case '+':
            return add(num1, num2)
        case '-':
            return subtract(num1, num2)
        case '×':
            return multiply(num1, num2)
        case '÷':
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

function delete(...array){ 
    var whichvalue = array.length
    array[whichvalue] = array[whichvalue].slice(0, -1)
    return {
        firstValue: array[0],
        operator: array[1]?array[1]:'',
        secValue: array[2]?array[2]:'',
    }
    //if there is firstvalue, delete the last number and return as firstvalue
    //if there is secvalue, deleter the last number and return as secvalue

}

