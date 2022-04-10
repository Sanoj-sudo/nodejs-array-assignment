
const getUniqueElements = (numbers) => {
    return numbers.filter ((value,index) =>
        numbers.indexOf(value) === index
    );
}

const sum = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber
}


