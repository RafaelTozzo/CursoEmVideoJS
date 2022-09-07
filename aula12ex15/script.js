function ageVerification() {
    var data = new Date()
    var year = data.getFullYear()
    var typedYear = document.getElementById('typedyear')
    var result = document.querySelector('div#result')
    var fsex = document.getElementsByName('radsex')
    var yearsOld = Number(year - typedYear.value)
    var img = document.getElementById('personimg')
    var personSex = ''

    if (typedYear.value > year || typedYear.value.length == 0) {
        window.alert('[ERROR] Invalid information, please check and try again!')
    } else {
        if (fsex[0].checked) {
            personSex = 'Man'
            if (yearsOld >= 0 && yearsOld < 10) {
                img.src = 'assets/babyman.jpg'
            } else if (yearsOld < 21) {
                img.src = 'assets/youngman.jpg'
            } else if (yearsOld < 50) {
                img.src = 'assets/man.jpg'
            } else {
                img.src = 'assets/oldman.jpg'
            }
        } else if (fsex[1].checked) {
            personSex = 'Woman'
            if (yearsOld >= 0 && yearsOld < 10) {
                img.src = 'assets/babywoman.jpg'
            } else if (yearsOld < 21) {
                img.src = 'assets/youngwoman.jpg'
            } else if (yearsOld < 50) {
                img.src = 'assets/woman.jpg'
            } else {
                img.src = 'assets/oldwoman.jpg'
            }
        }
    }
    result.innerHTML = `<p>We detected a ${personSex} with: ${yearsOld} years old.</p>`
    result.appendChild(img)
}
