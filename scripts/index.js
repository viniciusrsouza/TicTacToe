const buttons = [[], [], []]
const map = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]
let current = 'X'

function onClick(i, j) {
    if(current === 'X') {
        if (map[i][j] === '') {
            map[i][j] = current
            current = 'O'
            updateMap()
            nextPlay(map)
        }
    }
}

function updateMap() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const id = (`field-${(i * 3) + j}`)
            document
                .getElementById(id)
                .innerText = map[i][j]
        }
    }
}

window.onload = function () {
    let anchors = document.getElementsByClassName('frame')

    let count = 0, i = 0, j = 0
    for (const frame of anchors) {
        buttons[i][j] = frame
        const x = i, y = j
        frame.onclick = () => {
            onClick(x, y)
        }

        count++
        i = Math.floor(count / 3)
        j = count % 3
    }
}