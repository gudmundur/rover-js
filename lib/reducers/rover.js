const initialState = {
  x: 0,
  y: 0,
  direction: 'NORTH'
}

const rover = (state = initialState, action) => {
  switch (action.type) {
    case 'TURN_LEFT':
      switch (state.direction) {
        case 'NORTH':
          return Object.assign({}, state, { direction: 'WEST' })
        case 'WEST':
          return Object.assign({}, state, { direction: 'SOUTH' })
        case 'SOUTH':
          return Object.assign({}, state, { direction: 'EAST' })
        case 'EAST':
          return Object.assign({}, state, { direction: 'NORTH' })
      }
    case 'TURN_RIGHT':
      switch (state.direction) {
        case 'NORTH':
          return Object.assign({}, state, { direction: 'EAST' })
        case 'EAST':
          return Object.assign({}, state, { direction: 'SOUTH' })
        case 'SOUTH':
          return Object.assign({}, state, { direction: 'WEST' })
        case 'WEST':
          return Object.assign({}, state, { direction: 'NORTH' })
      }
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
