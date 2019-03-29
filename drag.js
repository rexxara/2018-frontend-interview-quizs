window.onload = function () {

    var div1 = document.getElementById("div1")
    div1.onmousedown = function (ev) {
        var oevent = ev || event
        var div=oevent.target
        var distanceX = oevent.clientX - div.offsetLeft
        var distanceY = oevent.clientY - div.offsetTop

        document.onmousemove = function (ev) {
            var oevent = ev || event
            div.style.left = oevent.clientX - distanceX + 'px'
            div.style.top = oevent.clientY - distanceY + 'px'
        }
        document.onmouseup = function () {
            document.onmousemove = null
            document.onmouseup = null
        }
    }
}