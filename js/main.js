const btn = document.querySelector('.btn');
const outputDiv = document.querySelector('.output-box');
const outputText = document.querySelector('.output-text');



const printRomanNumber = (nearest, number) => {
    let result = ''
    for (let index = 0; index < number; index++) {
        result += nearest   
    }
    return result
}


const finalResult = (nearest, base, highest, inputNumber) => {
    const result =  inputNumber - 5
    let romanNumber 
    if(result === 0){
        romanNumber = base
    }
    else if(result === -1){
        romanNumber = nearest + base
    }
    else if(result === 4){
        romanNumber = nearest + highest
    }
    else if(result <= -2){
        romanNumber = printRomanNumber(nearest, 5 - Math.abs(result))
    }
    else if(result <= 3){
        romanNumber = base + printRomanNumber(nearest, result)
    }
    return romanNumber
}



const lastResult = (input) => {
    const digitsArray = String(input).split('').map(Number);
    const digitsArrayLength = digitsArray.length
    let tenth, hundredth, thousandth, fifthThoundanth
    if(digitsArrayLength >= 1){
        tenth = finalResult("I", "V", "X", digitsArray[digitsArrayLength -1])
    }
    if(digitsArrayLength >= 2){
        hundredth = finalResult("X", "L", "C", digitsArray[digitsArrayLength -2])
    }
    if(digitsArrayLength >= 3){
        thousandth = finalResult("C", "D", "M", digitsArray[digitsArrayLength -3])
    }
    if(digitsArrayLength >= 4){
        fifthThoundanth = finalResult("M", "V̅", "X̅ ", digitsArray[digitsArrayLength -4])
    }
    let veryLastResult
    if(fifthThoundanth) {
        veryLastResult = fifthThoundanth + thousandth + hundredth + tenth
    }
    else if(thousandth) {
        veryLastResult = thousandth + hundredth + tenth
    }
    else if(hundredth) {
        veryLastResult = hundredth + tenth
    }
    else if(tenth) {
        veryLastResult =  tenth
    }
    return veryLastResult
}

btn.addEventListener('click', function() {
    const inputValue = document.querySelector('.input-number');
    const inputValueNumber = Number(inputValue.value)

    if(inputValue.value === ''){
        outputDiv.classList.add('danger')
        outputText.textContent = "Please enter a valid number"
    }
    else if(inputValueNumber <= 0){
        outputDiv.classList.add('danger')
        outputText.textContent = "Please enter a number greater than or equal to 1"
    }
    else if(inputValueNumber < 4000){
        outputDiv.classList.add('primary')
        outputDiv.classList.remove('danger')
        outputText.textContent = lastResult(inputValueNumber)
    }
    else if(inputValueNumber >= 4000){
        outputDiv.classList.add('danger')
        outputDiv.classList.remove('primary')
        outputText.textContent = "Please enter a number less than or equal to 3999"
    }
});
