let _node = GAME_TREE
let _path = findPath(_node)

let lim = 1

function nextPlay(map) {
    if(lim++ === 10) return
    console.log("CALL")
    console.log(_path)
    console.log(map, _node.state)
    if (equals(map, _node.state)) {
        const state = _path?.pop()
        console.log(state)
        if (state !== undefined) {
            _node = _node.children[state]
            map[_node.play[0]][_node.play[1]] = 'O'
            current = 'X'
            updateMap()
        }
    } else {
        for (let child of _node.children) {
            if (equals(child.state, map)) {
                _path = findPath(child)
                _node = child
                nextPlay(map)
                break
            }
        }
    }
}

function findPath(node) {
    if (node.weight === 1) return []
    if (!node.children) return []

    for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i]
        const path = findPath(child)
        if (path) {
            return [i, ...path]
        }
    }
}

function equals(arr1, arr2) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (arr1[i][j] !== arr2[i][j]) return false
        }
    }
    return true
}