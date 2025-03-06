document.addEventListener('DOMContentLoaded', () => {
    var buttons = document.querySelectorAll('button')

    var firstValue = []
    var secValue = []
    var operator
    var displayValue
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            var value = e.target.getAttribute('data-value')
            console.log(value)

            // if +-*/= is press, store the first string
            if (parseInt(value)){
                if (operator){
                    secValue.push(parseInt(value))
                }
                else{
                    firstValue.push(parseInt(value))
                }
                display(firstValue, operator, secValue)
            }
            else{
                if(secValue.length < 1){
                    operator = value
                }
                else if (operator){
                    //perform operation
                    console.log(firstValue)
                    var result = operation(firstValue, secValue, operator)
                    display(result)

                    var firstValue = []
                    var secValue = []
                }
                else{
                    //donothing
                }
            }

        })
    })

})

function add(num1, num2) {
    return num1 + num2  
  };
  
function subtract(num1, num2) {
      return num1 - num2
  };
  
function sum(array) {
    return array.reduce((acc, val) =>
       acc + val, 0)
      
};
  
function multiply(array) {
    return array.reduce((acc, val) => 
         acc * val 
      )
  };

function divide(num1, num2){
    return num1 / num2
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
    num1 = joinNumber(num1)
    num2 = joinNumber(num2)
    switch (operator){
        case 'add':
            add(num1, num2)
        case 'subtract':
            subtract(num1, num2)
        case 'multiply':
            multiply(num1, num2)
        case 'divide':
            divide(num1, num2)
    }
}

function joinNumber(array){
    return parseInt(array.join(''))
}

function display(...array){
    var result = array.map(item => joinNumber(item))
    document.querySelector('.display').innerHTML = joinNumber(result)
}