


//document.querySelector('html').onclick = function(){
//	alert('Ich keine monster');
//}

var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/butterflies.jpg'){
		myImage.setAttribute('src','images/fly3.jpg');
	}else{
		myImage.setAttribute('src','images/butterflies.jpg')
	}
}


//welcome massage

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myName = prompt('Please enter your name:');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Sehr gut, ' + myName;
}

if (!localStorage.getItem('name')) {
	setUserName();
}else{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Sehr gut, ' + storedName;
}

myButton.onclick = function(){
	setUserName();
}