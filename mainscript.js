//Menu interactions
var menuBox = document.getElementById("menuBox")
var menu = document.getElementById("menu")
var homeIcon = document.getElementById("homeIcon")
var settingsIcon = document.getElementById("settingsIcon")
var accountIcon = document.getElementById("accountIcon")
var aboutIcon = document.getElementById("aboutIcon")

function MenuTransform () {
    menu.style.left = "2vw"
    menu.style.transform = "translateY(-150px)"
    menu.style.padding = "150px 0 150px 0"
    menuBox.style.aspectRatio = "1/3.5"
    menuBox.style.top = "14vh"
    homeIcon.style.display = "block"
    settingsIcon.style.display = "block"
    aboutIcon.style.display = "block"
    accountIcon.style.display = "block"
    setTimeout(() => {
        homeIcon.style.opacity = 1
        settingsIcon.style.opacity = 1
        aboutIcon.style.opacity = 1
        accountIcon.style.opacity = 1
        setTimeout(() => {
            menu.removeEventListener("mouseenter", MenuTransform)
            menuBox.addEventListener("mouseleave", MenuRevert)
        }, 500)
    }, 500)
}

function MenuRevert () {
    subMenuActive = true
    SubMenu ()
    homeIcon.style.opacity = 0
    settingsIcon.style.opacity = 0
    aboutIcon.style.opacity = 0
    accountIcon.style.opacity = 0
    setTimeout(() => {
        menu.style.left = "-25px"
        menu.style.transform = "translateY(0)"
        menu.style.padding = "0"
        homeIcon.style.display = "none"
        settingsIcon.style.display = "none"
        aboutIcon.style.display = "none"
        accountIcon.style.display = "none"
        setTimeout(() => {
            menuBox.removeEventListener("mouseleave", MenuRevert)
            menu.addEventListener("mouseenter", MenuTransform)
        }, 500)
    }, 500)
}

menu.addEventListener("mouseenter", MenuTransform)


//Submenu interactions
var settingsMenu = document.getElementById("settingsMenu")
var subMenuActive = false

function SubMenu () {
    if (!subMenuActive) {
        settingsMenu.style.display = "block"
        setTimeout(() => {
            settingsMenu.style.opacity = 1
            subMenuActive = true
        }, 10)
    }
    else {
        settingsMenu.style.opacity = 0
        setTimeout(() => {
            settingsMenu.style.display = "none"
            subMenuActive = false
        }, 500)
    }
}

settingsIcon.addEventListener("click", SubMenu)


// Darkmode toggle
var root = document.querySelector(":root")
var mode = document.getElementById("modeToggle")
var icon = document.getElementById("modeIcon")
var moon = document.getElementById("moon")
var isDark = true

var baseDark = "#212121"
var mainDark = "#3a3a3a"
var shadowDark = "rgba(0, 0, 0, 0.5)"
var menuShadowDark = "rgba(0, 0, 0, 0.5)"
var textDark = "#d0d0dc"
var baseLight = "#d0d0dc"
var mainLight = "#b0b0bb"
var shadowLight = "rgba(118, 118, 118, 0.7)"
var menuShadowLight = "rgba(50, 48, 48, 0.5)"
var textLight = "#212121"

mode.addEventListener("click", function () {
    if (isDark) {
        root.style.setProperty("--base-color", baseLight)
        root.style.setProperty("--main-color", mainLight)
        root.style.setProperty("--shadow-color", shadowLight)
        root.style.setProperty("--menuShadow-color", menuShadowLight)
        root.style.setProperty("--text-color", textLight)
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
        root.style.setProperty("--menuShadow-color", menuShadowDark)
        root.style.setProperty("--text-color", textDark)
        icon.style.backgroundColor = "var(--main-color)"
        icon.style.left = "10%"
        icon.style.boxShadow = "0 0 10px grey"
        moon.style.opacity = 1
        isDark = true
    }
})


//Anim hover
var anims = document.getElementsByClassName("anim")

for (let i = 0; i < anims.length; i++) {
    anims[i].addEventListener("mouseenter", function () {
        anims[i].style.scale = "1.25"

        for (let y = 0; y < anims.length; y++) {
            if (y != i) {
                anims[y].style.filter = "blur(4px)"
            }
        }
    })

    anims[i].addEventListener("mouseleave", function () {
        anims[i].style.scale = "1"

        for (let y = 0; y < anims.length; y++) {
            anims[y].style.filter = "none"
        }
    })
}