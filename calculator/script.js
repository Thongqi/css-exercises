document.addEventListener('DOMContentLoaded', () => {
    var buttons = document.querySelectorAll('button')

    var firstValue = []
    var secValue = []
    var operator
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            var value = e.target.getAttribute('data-value')
            console.log(value)

            document.querySelector('.display').innerHTML = value

            // if +-*/= is press, store the first string
            if (parseInt(value)){
                if (operator){
                    secValue.push(parseInt(value))
                }
                else{
                    firstValue.push(parseInt(value))
                }
            }
            else{
                if(secValue.length < 1){
                    operator = value
                }
                else if (operator){
                    //perform operation
                    operation(firstValue, secValue, operator)
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

