let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/rebelstar-homepage-00.jpg') {
      myImage.setAttribute('src','images/rebelstar-homepage-01.jpg');
    } else {
      myImage.setAttribute('src','images/rebelstar-homepage-00.jpg');
    }
}



//    Button to change user
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();}
    else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}




  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

//        Añade la funcion setUserName al boton creado
  myButton.onclick = function() {
    setUserName();
  }
  