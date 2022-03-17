let section1 = document.querySelector('section')
let section2 = document.querySelector('main > :nth-child(3)')

section1.innerText = '<strong>Hello</strong> world - innerText lägger bara in text'

section2.innerHTML = '<strong>Hello</strong> again - innerHTML lägger in text och HTML'


let lista = document.createElement('ul')
function addToList(list, content) {
	let item = document.createElement('li')
	item.innerText = content
	list.appendChild(item)
}
for( let i=1; i<=10; i++ ) {
	addToList(lista, i)
}


let main = document.querySelector('main')
main.appendChild(lista)

let borderButton = document.querySelector('#border-button')
borderButton.addEventListener('click', event => {
	// console.log('event object: ', event)
	let sections = document.querySelectorAll('section')
	sections.forEach(s => {
		s.className = 'modified-border'
	})
})