window.addEventListener('load', function() {
	
	var myButton = document.querySelector('#clickbutton')
	var myTextbox = document.querySelector('#textbox')
	
	myButton.addEventListener('click', function() {
		myTextbox.innerText = 'VASYA'
	})	
})