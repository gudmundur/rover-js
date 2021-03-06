const initialState = {
  x: 0,
  y: 0,
  direction: 'NORTH'
}

const LEFT_OF = {
  'NORTH': 'WEST',
  'WEST': 'SOUTH',
  'SOUTH': 'EAST',
  'EAST': 'NORTH'
}

const RIGHT_OF = {
  'NORTH': 'EAST',
  'EAST': 'SOUTH',
  'SOUTH': 'WEST',
  'WEST': 'NORTH'
}

const rover = (state = initialState, action) => {
  switch (action.type) {
    case 'TURN_LEFT':
      return Object.assign({}, state, { direction: LEFT_OF[state.direction] })
    case 'TURN_RIGHT':
      return Object.assign({}, state, { direction: RIGHT_OF[state.direction] })
    case 'MOVE_FORWARD':
      switch (state.direction) {
        case 'NORTH':
          return Object.assign({}, state, { y: state.y + 1 })
        case 'EAST':
          return Object.assign({}, state, { x: state.x + 1 })
        case 'SOUTH':
          return Object.assign({}, state, { y: state.y - 1 })
        case 'WEST':
          return Object.assign({}, state, { x: state.x - 1 })
      }
    case 'MOVE_BACKWARD':
      switch (state.direction) {
        case 'NORTH':
          return Object.assign({}, state, { y: state.y - 1 })
        case 'EAST':
          return Object.assign({}, state, { x: state.x - 1 })
        case 'SOUTH':
          return Object.assign({}, state, { y: state.y + 1 })
        case 'WEST':
          return Object.assign({}, state, { x: state.x + 1 })
      }
    default:
      return state
  }
}

module.exports = rover
