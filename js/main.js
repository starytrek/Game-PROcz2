// const sizeUp = document.querySelector('.size-up')
// const sizeDown = document.querySelector('.size-down')
// const color = document.querySelector('.color')
// const p = document.querySelector('p')

// let fontSize = 20

// function bigText() {
// 	fontSize += 5
// 	p.style.fontSize = fontSize + 'px'
// }
// function smallText() {
// 	fontSize -= 5
// 	p.style.fontSize = fontSize + 'px'
// }
// function colored() {

// 	p.style.color = 'gold'
// }
// sizeUp.addEventListener('click', bigText)
// sizeDown.addEventListener('click', smallText)
// color.addEventListener('click', colored)
document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar')
	const allNavItems = document.querySelectorAll('.nav-link')
	// wysztkie elementy nawigacji pobrałem
	const navList = document.querySelector('.navbar-collapse')
	function addShadow() {
		if (window.scrollY >= 300) {
			nav.classList.add('shadow-bg')
		} else {
			nav.classList.remove('shadow-bg')
		}
	}

	allNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))
	//dla każdego Linku...nadaje Listener....nasłuchuje na click f. strzałkowa...zabiera klasę .SHOW chowa menu

	window.addEventListener('scroll', addShadow)
})

// function hidNav() {
//     if (onclick 'navLink') {
//         nav.classList.remove('show')
//         // nav.classList.add('shadow-bg')
//     } else {
//     }
// }

// window.addEventListener('scroll', addShadow)
