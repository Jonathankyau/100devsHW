// This function multiplies the first two numbers then takes that product and subtracts the third number

document.querySelector('#mathButton').addEventListener('click', mathFunction)

function mathFunction() {
    const first = document.querySelector('#firstNumber').value
    const second = document.querySelector('#secondNumber').value
    const third = document.querySelector('#thirdNumber').value
    const result = ((first * second) - third)
    console.log(result);
    document.querySelector('#result').innerText = `Result = (${first} x ${second}) - ${third} = ${result}`;
}