function loadImage() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('morningimage')
    var timeDay = new Date()
    var hours = timeDay.getHours()

    msg.innerHTML = `It's now ${hours} hours`

    if (hours >= 0 && hours <= 12) {
        img.src = 'assets/morningimage.png'
        document.body.style.background = '#F5E8C7'
    } else if (hours >= 12 && hours <= 18) {
        img.src = 'assets/sunsetimage.png'
        document.body.style.background = '#FFAE6D'
    } else {
        img.src = 'assets/nightimage.png'
        document.body.style.background = '#5B4B8A'
    }
}

