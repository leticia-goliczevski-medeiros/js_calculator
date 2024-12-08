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
 
  updateDisplay() {
    this.bottomOperandTextElement.textContent = this.bottomOperand;
    this.upperOperandTextElement.textContent = this.upperOperand;
  }
}

const calculator = new Calculator(upperOperandTextElement, bottomOperandTextElement);

clearAllButton.addEventListener('click', ()=> {
  calculator.clearAll()
  calculator.updateDisplay()
})

