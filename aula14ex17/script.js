function count() {
    let start = document.getElementById('txtstart')
    let end = document.getElementById('txtend')
    let step = document.getElementById('txtstep')
    let result = document.getElementById('result')

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        result.innerHTML = 'Impossible to count!'

    } else {
        result.innerHTML = 'Counting: <br>'
        let startV = Number(start.value)
        let endV = Number(end.value)
        let stepV = Number(step.value)

        if (stepV <= 0) {
            window.alert('Step invalid! Step consideration = 1')
            stepV = 1
        }

        if (startV < endV) {
            for (let c = startV; c <= endV; c += stepV) {
                result.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for (let c = startV; c >= endV; c -= stepV) {
                result.innerHTML += ` ${c} \u{1F449}`
            }
        }
        result.innerHTML += `\u{1F3C1}`
    }
}