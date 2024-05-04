const convertBtn = document.querySelector('.btn'); 
const outputContainer = document.querySelector('.output-box'); 
const outputText = document.querySelector('.output-text'); 

const generateRomanDigit = (nearest, number) => {
    let result = ''
    for (let index = 0; index < number; index++) {
        result += nearest   
    }
    return result
}

const calculateRomanNumber = (nearest, base, highest, inputNumber) => {
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
        romanNumber = generateRomanDigit(nearest, 5 - Math.abs(result))
    }
    else if(result <= 3){
        romanNumber = base + generateRomanDigit(nearest, result)
    }
    return romanNumber
}

const convertToRoman = (input) => {
    const digitsArray = String(input).split('').map(Number);
    const digitsArrayLength = digitsArray.length
    let tenth, hundredth, thousandth, fifthThousandth 

    if(digitsArrayLength >= 1){
        tenth = calculateRomanNumber("I", "V", "X", digitsArray[digitsArrayLength -1])
    }
    if(digitsArrayLength >= 2){
        hundredth = calculateRomanNumber("X", "L", "C", digitsArray[digitsArrayLength -2])
    }
    if(digitsArrayLength >= 3){
        thousandth = calculateRomanNumber("C", "D", "M", digitsArray[digitsArrayLength -3])
    }
    if(digitsArrayLength >= 4){
        fifthThousandth = calculateRomanNumber("M", "V̅", "X̅ ", digitsArray[digitsArrayLength -4])
    }

    let romanNumber
    if(fifthThousandth) {
        romanNumber = fifthThousandth + thousandth + hundredth + tenth
    }
    else if(thousandth) {
        romanNumber = thousandth + hundredth + tenth
    }
    else if(hundredth) {
        romanNumber = hundredth + tenth
    }
    else if(tenth) {
        romanNumber =  tenth
    }
    return romanNumber
}

convertBtn.addEventListener('click', function() {
    const inputValue = document.querySelector('.input-number');
    const inputValueNumber = Number(inputValue.value)

    if(inputValue.value === ''){
        outputContainer.classList.add('danger') 
        outputText.textContent = "Please enter a valid number"
    }
    else if(inputValueNumber <= 0){
        outputContainer.classList.add('danger') 
        outputText.textContent = "Please enter a number greater than or equal to 1"
    }
    else if(inputValueNumber < 4000){
        outputContainer.classList.add('primary') 
        outputContainer.classList.remove('danger') 
        outputText.textContent = convertToRoman(inputValueNumber) 
    }
    else if(inputValueNumber >= 4000){
        outputContainer.classList.add('danger') 
        outputContainer.classList.remove('primary') 
        outputText.textContent = "Please enter a number less than or equal to 3999"
    }
});
