//Menu interactions
var menu = document.getElementById("menu")

menu.addEventListener("mouseenter", function () {
    menu.style.left = "4vw"
})
menu.addEventListener("mouseleave", function () {
    menu.style.left = "-25px"
})

// Darkmode toggle
var root = document.querySelector(":root")
var mode = document.getElementById("modeToggle")
var icon = document.getElementById("modeIcon")
var moon = document.getElementById("moon")
var isDark = true

var baseDark = "#212121"
var mainDark = "#3a3a3a"
var shadowDark = "rgba(0, 0, 0, 0.5)"
var baseLight = "#d0d0dc"
var mainLight = "#b0b0bb"
var shadowLight = "rgba(118, 118, 118, 0.7)"

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