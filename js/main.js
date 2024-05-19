const screen = document.querySelector('.screen')
const clear = document.querySelector('.clear')
const clearEntry = document.querySelector('.clear-entry')
const numbers = document.querySelectorAll('.number')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const multiply = document.querySelector('.multiply')
const division = document.querySelector('.divide')
const equal = document.querySelector('.equal')
const squareRoot = document.querySelector('.square-root')
const percentage = document.querySelector('.percent')

let cache = new Map()

function summingResult(firstOperation, currentOperation, secondOperation){
    if(currentOperation === '+'){
        let result = parseFloat(firstOperation) + parseFloat(secondOperation)
        if(result.toString().length > 14){
            result = result.toString().split('').slice(0, 14).join('')
        }
        if(result.toString() === parseInt(result).toString()){
            result = parseInt(result)
        }
        return result
    }
    if(currentOperation === '-'){
        let result = parseFloat(firstOperation) - parseFloat(secondOperation)
        if(result.toString().length > 14){
            result = result.toString().split('').slice(0, 14).join('')
        }
        if(result.toString() === parseInt(result).toString()){
            result = parseInt(result)
        }
        return result
    }
    if(currentOperation === '/'){
        let result = parseFloat(firstOperation) / parseFloat(secondOperation)
        if(result.toString().length > 14){
            result = result.toString().split('').slice(0, 14).join('')
        }
        if(result.toString() === parseInt(result).toString()){
            result = parseInt(result)
        }
        return result
    }
    if(currentOperation === '*'){
        let result = parseFloat(firstOperation) * parseFloat(secondOperation)
        if(result.toString().length > 14){
            result = result.toString().split('').slice(0, 14).join('')
        }
        if(result.toString() === parseInt(result).toString()){
            result = parseInt(result)
        }
        return result
    }
}

let firstOperation = ''
let secondOperation = ''
let currentOperation = ''

numbers.forEach(elem => {
    elem.addEventListener('click', () => {
        elem.innerText === '' && !screen.innerText.includes('.') && screen.innerText !== '' ? screen.innerText += '.' : screen.innerText += elem.innerText
    })
})
clear.addEventListener('click', () => {
    screen.innerText = ''
})
clearEntry.addEventListener('click', () => {
    let currentOp = screen.innerText.split('')
    currentOp.pop()
    screen.innerText = currentOp.join('')
})
plus.addEventListener('click', () => {
    currentOperation !== '' ? firstOperation = summingResult(firstOperation, currentOperation, screen.innerText) : firstOperation = screen.innerText
    currentOperation = '+'
    screen.innerText = ''
})
minus.addEventListener('click', () => {
    currentOperation !== '' ? firstOperation = summingResult(firstOperation, currentOperation, screen.innerText) : firstOperation = screen.innerText
    currentOperation = '-'
    screen.innerText = ''
})
multiply.addEventListener('click', () => {
    currentOperation !== '' ? firstOperation = summingResult(firstOperation, currentOperation, screen.innerText) : firstOperation = screen.innerText
    currentOperation = '*'
    screen.innerText = ''
})
division.addEventListener('click', () => {
    currentOperation !== '' ? firstOperation = summingResult(firstOperation, currentOperation, screen.innerText) : firstOperation = screen.innerText
    currentOperation = '/'
    screen.innerText = ''
})
equal.addEventListener('click', () => {
    secondOperation = screen.innerText
    let operation = firstOperation + currentOperation + secondOperation
    if(cache.has(operation)){
        screen.innerText = cache.get(operation)
    }
    else{
        screen.innerText = summingResult(firstOperation, currentOperation, secondOperation) !== undefined ? summingResult(firstOperation, currentOperation, secondOperation) : ''
        cache.set(operation, screen.innerText)
    }
    firstOperation = ''
    secondOperation = ''
    currentOperation = ''
})
squareRoot.addEventListener('click', () => {
    let result = 0
    if(screen.innerText !== ''){
        result = Math.sqrt(parseFloat(screen.innerText))
        if(result.toString().length > 14){
            result = result.toString().split('').slice(0, 14).join('')
        }
        if(result.toString() === parseInt(result).toString()){
            result = parseInt(result)
        }
        screen.innerText = result
    }
    else{
        screen.innerText = ''
    }
})
percentage.addEventListener('click', () => {
    let result = 0
    if(screen.innerText !== ''){
        result = parseFloat(screen.innerText) / 100
        if(result.toString().length > 10){
            result = result.toFixed(10)
        }
        if(result.toString() === parseInt(result).toString()){
            result = parseInt(result)
        }
        screen.innerText = result
    }
    else{
        screen.innerText = ''
    }
})
