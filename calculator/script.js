document.addEventListener('DOMContentLoaded', () => {
    var buttons = document.querySelectorAll('button')

    var firstValue = []
    var operator
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            var 
            console.log(value)

            document.querySelector('.display').innerHTML = value

            // if +-*/= is press, store the first string
            if (parseInt(value)){
                firstValue.push(parseInt(value))
            }
            else{
                if(firstValue.length < 1){
                    break;
                }
                else{
                    operator = value
                }
            }

            if (value == 'enter'){
                checkCase
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

function enter(){

}