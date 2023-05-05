// Logo animation
var logoInner = document.getElementById("logoInner")
setTimeout(function () {
    logoInner.style.opacity = 1
    setTimeout(function () {
        logoOuter.style.display = "none"
    }, 1000)
}, 5000)

// Darkmode toggle
var root = document.querySelector(":root")
var mode = document.getElementById("modeToggle")
var icon = document.getElementById("modeIcon")
var moon = document.getElementById("moon")
var isDark = true

var baseDark = "#212121"
var mainDark = "#3a3a3a"
var baseLight = "#f2f2f7"
var mainLight = "#d4d4dd"
var shadowLight = "grey"
var shadowDark = "black"

mode.addEventListener("click", function () {

    if (isDark) {
        root.style.setProperty("--base-color", baseLight)
        root.style.setProperty("--main-color", mainLight)
        root.style.setProperty("--shadow-color", shadowLight)
        icon.style.backgroundColor = "yellow"
        icon.style.left = "calc(90% - " + icon.clientWidth + "px)"
        icon.style.boxShadow = "0 0 10px yellow"
        moon.style.opacity = 0
        isDark = false
    }
    else {
        root.style.setProperty("--base-color", baseDark)
        root.style.setProperty("--main-color", mainDark)
        root.style.setProperty("--shadow-color", shadowDark)
        icon.style.backgroundColor = "var(--main-color)"
        icon.style.left = "10%"
        icon.style.boxShadow = "0 0 10px grey"
        moon.style.opacity = 1
        isDark = true
    }
})