const btn = document.querySelector('.btn');
const outputDiv = document.querySelector('.output-box');
const outputText = document.querySelector('.output-text');


const converFunction = (input) => {
    let result;
    switch (input) {
        case 1:
            result = 'I';
            break;
        case 5:
            result = 'V';
            break;
        case 10:
            result = 'X';
            break;
        case 50:
            result = 'L';
            break;
        case 100:
            result = 'C';
            break;
        case 500:
            result = 'D';
            break;
        case 1000:
            result = 'M';
            break;
        default:
            break;
    }
    
}

btn.addEventListener('click', function() {
    const inputValue = document.querySelector('.input-number');
    const inputValueNumber = Number(inputValue.value)

    console.log(inputValueNumber + 1)
    if(inputValueNumber < 0){
        outputDiv.classList.add('danger')
        outputText.textContent = "Please enter a number greater than or equal to 1"
    }
    if(inputValueNumber >= 4000){
        outputDiv.classList.add('danger')
        outputText.textContent = "Please enter a number less than or equal to 3999"
    }
});
