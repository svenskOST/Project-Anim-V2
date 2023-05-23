var handle = document.getElementById("handle")

function RelativeBorder () {
    handle.style.border = window.innerWidth / 100 * 5 + "px solid #cecece"
    handle.style.borderTop = window.innerWidth / 100 * 5 + "px solid transparent"
    handle.style.borderLeft = window.innerWidth / 100 * 8.75 + "px solid transparent"
}

RelativeBorder ()

window.addEventListener("resize", RelativeBorder)