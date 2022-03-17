let section1 = document.querySelector('section')
let section2 = document.querySelector('main > :nth-child(5)')

section1.innerText = '<strong>Hello</strong> world - innerText lägger bara in text'

section2.innerHTML = '<strong>Hello</strong> again - innerHTML lägger in text och HTML'


let lista = document.createElement('ul')
function addToList(list, content) {
	let item = document.createElement('li')
	item.innerText = content
	item.addEventListener('click', event => {
		if( item.className === '' ) {
			item.className = 'selected'
		} else {
			item.className = ''
		}
	})
	list.appendChild(item)
}
for( let i=1; i<=10; i++ ) {
	addToList(lista, i)
}


let main = document.querySelector('main')
main.appendChild(lista)

let sections = document.querySelectorAll('section')
let borderButton = document.querySelector('#border-button')
borderButton.addEventListener('click', event => {
	// console.log('event object: ', event)
	sections.forEach(s => {
		s.className = 'modified-border'
	})
})
let restoreButton = document.querySelector('#restore-button')
restoreButton.addEventListener('click', event => {
	// console.log('event object: ', event)
	sections.forEach(s => {
		s.className = ''
	})
})