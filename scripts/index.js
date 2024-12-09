const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const clearAllButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const equalsButton = document.querySelector("[data-equals]");
const upperOperandTextElement = document.querySelector("[data-upper-operand]");
const bottomOperandTextElement = document.querySelector("[data-bottom-operand]");


class Calculator {
  constructor(upperOperandTextElement, bottomOperandTextElement) {
    this.upperOperandTextElement = upperOperandTextElement;
    this.bottomOperandTextElement = bottomOperandTextElement;
    this.clearAll();
  }

  clearAll() {
    this.upperOperand = ''
    this.bottomOperand = ''
    this.operation = undefined
  }

  appendNumber(number) {
    /* impede que mais de uma vírgula (ou ponto, nesse caso) seja adicionada */
    if (number === '.' && this.bottomOperand.includes(".")) return 
    this.bottomOperand = this.bottomOperand.toString() + number.toString(); 
  }
 
  updateDisplay() {
    this.bottomOperandTextElement.textContent = this.bottomOperand;
    this.upperOperandTextElement.textContent = this.upperOperand;
  }
}

const calculator = new Calculator(upperOperandTextElement, bottomOperandTextElement);

numberButtons.forEach(button => {
  button.addEventListener('click', ()=> {
    calculator.appendNumber(button.textContent)
    calculator.updateDisplay()
  })
})

clearAllButton.addEventListener('click', ()=> {
  calculator.clearAll()
  calculator.updateDisplay()
})

