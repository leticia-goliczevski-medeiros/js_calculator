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

  delete() {
    this.bottomOperand = this.bottomOperand.toString().slice(0, -1)
  }

  appendNumber(number) {
    /* impede que mais de uma vírgula (ou ponto, nesse caso) seja adicionada */
    if (number === '.' && this.bottomOperand.includes(".")) return 
    this.bottomOperand = this.bottomOperand.toString() + number.toString(); 
  }

  chooseOperation(operation) {
    if (this.bottomOperand === '') return /* evita que o upperOperand receba o valor de uma string vazia */
    if (this.upperOperand !== '') {
      this.compute()           //se já houver um número no upperOperand, calcular o novo valor
    }
    this.operation = operation;
    this.upperOperand = this.bottomOperand; /* quando uma operação é adicionada, o valor que está embaixo passa para cima */
    this.bottomOperand = ''
  }

  compute() {
    let result;
    const upperNumber = parseFloat(this.upperOperand);
    const bottomNumber = parseFloat(this.bottomOperand);

    if(isNaN(upperNumber) || isNaN(bottomNumber)) return //se o usuário clicar no botão de igual mas não houver números no display superior ou inferior, o cálculo não precisa ser feito

    switch (this.operation) {
      case '+':
        result = upperNumber + bottomNumber
        break
      case '-':
        result = upperNumber - bottomNumber
        break
      case '*':
        result = upperNumber * bottomNumber
        break
      case '/':
        result = upperNumber / bottomNumber
        break
      default:    //se nenhuma das opções for selecionada, é uma operação inválida e nada deve ser calculado
        return
    }
    this.bottomOperand = result;
    this.upperOperand = '';
    this.operation = undefined;
  }
 
  updateDisplay() {
    this.bottomOperandTextElement.textContent = this.bottomOperand;
    if (this.operation != undefined) {
      this.upperOperandTextElement.textContent = `${this.upperOperand} ${this.operation}`;
    } else {
      this.upperOperandTextElement.textContent = ''
    }
  }
}

const calculator = new Calculator(upperOperandTextElement, bottomOperandTextElement);

numberButtons.forEach(button => {
  button.addEventListener('click', ()=> {
    calculator.appendNumber(button.textContent)
    calculator.updateDisplay()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', ()=> {
    calculator.chooseOperation(button.textContent)
    calculator.updateDisplay()
  })
})

equalsButton.addEventListener('click', ()=> {
  calculator.compute()
  calculator.updateDisplay()
})

clearAllButton.addEventListener('click', ()=> {
  calculator.clearAll()
  calculator.updateDisplay()
})

deleteButton.addEventListener('click', ()=> {
  calculator.delete()
  calculator.updateDisplay()
})
