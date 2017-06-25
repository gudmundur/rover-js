const actions = require('./rover')

describe('Rover actions', () => {
  test('turnLeft', () => {
    const action = actions.turnLeft()
    expect(action.type).toEqual('TURN_LEFT')
  })

  test('turnRight', () => {
    const action = actions.turnRight()
    expect(action.type).toEqual('TURN_RIGHT')
  })

  test('moveForward', () => {
    const action = actions.moveForward()
    expect(action.type).toEqual('MOVE_FORWARD')
  })

  test('moveBackward', () => {
    const action = actions.moveBackward()
    expect(action.type).toEqual('MOVE_BACKWARD')
  })
})
