document.querySelector('#button').addEventListener('click', convertToLowerCase)

function convertToLowerCase () {
  const inputText = document.querySelector('#anyText').value.toLowerCase()

  document.querySelector('#result').innerText = inputText
}
