var prev = document.getElementById("prev")
var next = document.getElementById("next")
var slider = document.getElementById("slider")
var childlen = slider.children.length
var num = 0
function change(child, current,) {
    current.setAttribute("class", "slide")
    child.setAttribute("class", "slide active")
}
next.onclick = function next() {
    num = num + 1
    var current = slider.children[num - 1]
    if (num >= childlen) {
        num = 0
    }
    var child = slider.children[num]
    change(child, current,)
}
prev.onclick = function prev() {
    num = num - 1
    if (num <= -1) {
        num = childlen - 1
        var current = slider.children[0]
    } else {
        var current = slider.children[num + 1]
    }
    var child = slider.children[num]
    change(child, current,)
}