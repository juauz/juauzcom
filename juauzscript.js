var desc = Array.prototype.slice.call(document.querySelectorAll(".case-description"));
var button = Array.prototype.slice.call(document.querySelectorAll(".behance-link"));


var descText = [];

for (var i = 0; i < desc.length; i++) {
    descText.push(desc[i].innerHTML);
}

var behance = "Will open on Behance"

button.forEach(function gogo(ele, index) {
    ele.addEventListener("mouseover", function gotwo() {
        desc[index].classList.add("open-on");
        desc[index].innerHTML = behance;
    })

    ele.addEventListener("mouseleave", function leave() {
        desc[index].classList.remove("open-on");
        desc[index].innerHTML = descText[index];
    })
})

// HAMBURGER //

var hamburger = document.getElementById("menu-icon-css");
var menuMobile = document.getElementById("menu-links");

hamburger.addEventListener("click", function open() {
    hamburger.classList.toggle("rotate");
    menuMobile.classList.toggle("show");
})

// SLIDE MENU LEFT SIDE //

var hireJoao = document.getElementById("hire-joao");
var sideMenu = document.getElementById("side-menu");
var closeButton = document.getElementById("close");
var conteudoMenu = document.getElementById("side-menu-content");

var span1 = document.getElementById("span1");
var span2 = document.getElementById("span2");

var corpo = document.getElementsByTagName("body");

var hireLinks = Array.prototype.slice.call(document.querySelectorAll(".hire-link"));

hireLinks.forEach(function get(hireThing, index) {

    hireThing.addEventListener("click", function openSide() {
        sideMenu.classList.remove("goaway");
        sideMenu.classList.remove("closeeffect");
        conteudoMenu.classList.remove("goaway");
        conteudoMenu.classList.add("woweffect");
        sideMenu.classList.add("show");
        sideMenu.classList.add("drop");
        span1.classList.add("ratata");
        span1.classList.remove("ratataback");
        corpo[0].classList.add("noscroll");

    })

    closeButton.addEventListener("click", function closeSide() {
        sideMenu.classList.add("closeeffect");
        sideMenu.classList.add("goaway");
        conteudoMenu.classList.add("goaway");
        conteudoMenu.classList.remove("woweffect");
        sideMenu.classList.remove("drop");
        span1.classList.remove("ratata");
        span1.classList.add("ratataback");
        corpo[0].classList.remove("noscroll");
    })
})



// FORM //

var nameF = document.getElementById("name-field");
var emailF = document.getElementById("email-field");
var msgF = document.getElementById("msg-field");

var upholders = document.getElementsByClassName("upholder");

var allF = [nameF, emailF, msgF];
var upText = ["Nice to meet you,", "Where can I reach you?", "How can I help?"]

var formStyle = document.getElementsByClassName("form-style");

var formButton = document.getElementById("form-button");

var valores = [nameF.value, emailF.value, msgF.value];

allF.forEach(function (ff, index) {
    ff.addEventListener("focus", function () {
        upholders[index].innerHTML = upText[index];
        upholders[index].classList.add("gobege");
        formStyle[index].classList.add("clicked");
    })



    ff.addEventListener("blur", function () {
        if (ff.value == "") {
            upholders[index].innerHTML = ".";
            upholders[index].classList.remove("gobege");
            formStyle[index].classList.remove("clicked");
        }
    })


    function makeClickable() {
        if (nameF.value == "" || emailF.value == "" || msgF.value == "") {
            formButton.disabled = true;
            formButton.value = "Tell me more";
        } else {
            formButton.disabled = false;
            formButton.value = "Send";
        }
    }

    makeClickable();

    ff.addEventListener("input", makeClickable)

})
