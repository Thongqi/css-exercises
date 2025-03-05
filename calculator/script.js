document.addEventListener('DOMContentLoaded', () => {
    var buttons = document.querySelectorAll('button')

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            var value = e.target.getAttribute('data-value')
            console.log(e.target.getAttribute('data-value'))
            console.log(this.getAttribute('data-value'))

            document.querySelector('.display').innerHTML = value

        
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
  