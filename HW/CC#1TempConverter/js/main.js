document.querySelector('#degreesF').addEventListener('click', powerConverterC)
document.querySelector('#degreesC').addEventListener('click', powerConverterF)

function powerConverterC () {

  const celsius = document.querySelector('#degrees').value

  const convertedVal = celsius * 9/5 + 32

  document.querySelector('#result').innerText = convertedVal + '°F'

  if (convertedVal >= 75){
    document.querySelector('#moreTemp').innerText = "MORE!!!"
    document.querySelector('body').style.backgroundImage = "url('https://media3.giphy.com/media/1jXGsHY2EKdL27mEMd/giphy.gif')"
  }else if(convertedVal < 75 && convertedVal > 60 ) {
    document.querySelector('#moreTemp').innerText = "Going to Toshi station to pick up some power converters"
    document.querySelector('body').style.backgroundImage = "url('https://media1.giphy.com/media/oeGgcmHVHLVCg/giphy.gif')"
  }else{
    document.querySelector('#moreTemp').innerText = "Could definitely use a Tauntaun sleeping bag..."
    document.querySelector('body').style.backgroundImage = "url('https://i.giphy.com/media/26tPeJySQFjb2FhgA/giphy.webp')"

  }

}

function powerConverterF () {

  const celsius = document.querySelector('#degrees').value

  const convertedVal = (celsius - 32) * 5/9

  document.querySelector('#result').innerText = convertedVal + '°F'

  if (convertedVal >= 23.8){
    document.querySelector('#moreTemp').innerText = "MORE!!!"
    document.querySelector('body').style.backgroundImage = "url('https://media3.giphy.com/media/1jXGsHY2EKdL27mEMd/giphy.gif')"
  }else if(convertedVal < 23.8 && convertedVal > 15.5 ) {
    document.querySelector('#moreTemp').innerText = "Going to Toshi station to pick up some power converters"
    document.querySelector('body').style.backgroundImage = "url('https://media1.giphy.com/media/oeGgcmHVHLVCg/giphy.gif')"
  }else{
    document.querySelector('#moreTemp').innerText = "Could definitely use a Tauntaun sleeping bag..."
    document.querySelector('body').style.backgroundImage = "url('https://i.giphy.com/media/26tPeJySQFjb2FhgA/giphy.webp')"

  }

}
