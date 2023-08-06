let aboutMe = document.getElementsByClassName('about-me');
let aboutMeNav = document.getElementsByClassName('about_me');
let home = document.getElementsByClassName('home');
let homeNav = document.getElementsByClassName('home_');
let homeSelector = document.querySelector('.nav-bar ul li a.home_ ');
let website = document.getElementById('whole-website');
let JPMCButton = document.getElementById('JPMC-button')
let contact = document.getElementById('contacts');

aboutMe[0].style.display = "none";

aboutMeNav[0].onclick = function(event) {
    // event.preventDefault();
    aboutMeNav[0].style.color = ('#11101b');
    aboutMeNav[0].style.backgroundColor = ('#fefefe');
    homeSelector.classList.remove("color");
    homeSelector.classList.remove("background");
    homeSelector.style.color = ('#fefefe');
    homeSelector.style.background = ('#11101b');
    home[0].style.display = "none";
    aboutMe[0].style.display = "";
}

homeNav[0].onclick = function(event) {
    // event.preventDefault();
    home[0].style.display = "";
    aboutMe[0].style.display = "none";
}

let hamburger = document.getElementsByClassName('hamburger');
hamburger[0].onclick = function() {
    let navBar = document.getElementsByClassName('nav-bar');
    navBar[0].classList.toggle("home_");
}

JPMCButton.onclick = function() {
    location.href = "https://codepen.io/Kyle-Shi/pen/wvQYLRv";
}

contact.onclick = function() {
    alert("Not currently avaliable");
}