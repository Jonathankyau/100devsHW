const rey = document.querySelector('#rey')
const finn = document.querySelector('#finn')
const poe = document.querySelector('#poe')

document.querySelector('#reyNext').addEventListener('click', reyNext)
document.querySelector('#finnNext').addEventListener('click', finnNext)
document.querySelector('#poeNext').addEventListener('click', poeNext)

function reyNext(){
	finn.classList.add('hidden')
	poe.classList.add('hidden')
	rey.classList.toggle('hidden')
}

function finnNext(){
	rey.classList.add('hidden')
	poe.classList.add('hidden')
	finn.classList.toggle('hidden')
}

function poeNext(){
	rey.classList.add('hidden')
	finn.classList.add('hidden')
	poe.classList.toggle('hidden')
}
