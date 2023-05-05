// Logo animation
var intro = document.getElementById("intro")
var logoOuter = document.getElementById("logoOuter")
var logoInner = document.getElementById("logoInner")
var fadeEffect = document.getElementById("fadeEffect")
setTimeout(function () {
    fadeEffect.style.animation = "logoFade 3s ease-out"
    setTimeout(function () {
        fadeEffect.style.display = "none"
    }, 3000)
    setTimeout(function () {
        logoOuter.style.opacity = 0
        setTimeout(function () {
            logoOuter.style.display = "none"
            setTimeout(function () {
                logoInner.style.animation = "logoLeave 1.5s"
                setTimeout(function () {
                    intro.style.opacity = 0
                    setTimeout(function () {
                        intro.style.display = "none"
                    }, 500)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 2000)
}, 2000)