function init(starter) {
    const node = {
        playing: starter,
        state: [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ],
        weight: 0,
        play: [],
        children: []
    }
    loadChildren(node, (node.playing === 'X') ? 'O' : 'X',)
    console.log(node)
}

function loadChildren(node, desired) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (node.state[i][j] === '') {
                const state = []
                cloneArray(node.state, state)
                state[i][j] = node.playing

                let weight = 0
                const result = gameWon(state)
                if (result === desired) weight = 1
                else if (!result) weight = 0
                else weight = -1

                const child = {
                    playing: (node.playing === 'X') ? 'O' : 'X',
                    weight: weight,
                    state: state,
                    play: [i, j],
                    children: []
                }
                node.children.push(child)
                loadChildren(child)
            }
        }
    }
}

function cloneArray(from, to) {
    for (let i = 0; i < from.length; i++) {
        to[i] = []
        for (let j = 0; j < from[i].length; j++) {
            to[i].push(from[i][j])
        }
    }
}

function gameWon(map) {
    if (map[0][0] === map[1][1] && map[0][0] === map[2][2]) {
        return map[0][0]
    } else if (map[0][2] === map[1][1] && map[0][2] === map[2][0]) {
        return map[0][2]
    } else {
        for (let i = 0; i < 3; i++) {
            if (map[i][0] === map[i][1] && map[i][0] === map[i][2]) {
                return map[i][0]
            }
            if (map[0][i] === map[1][i] && map[0][i] === map[2][i]) {
                return map[0][i]
            }
        }
    }
    return undefined
}