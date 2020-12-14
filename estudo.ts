// S -> State
// T -> Type
// K -> Key
// V -> Value
// E -> Element

function useState<S extends string| number = string>() {
  let state: S

  function getState() {
    return state
  }

  function setState(newState: S) {
    state = newState
  }

  return { getState, setState }
}

const oneState = useState()
oneState.setState('121')
console.log(oneState.getState())

const twoState = useState<number>()
twoState.setState(121)
console.log(twoState.getState())
