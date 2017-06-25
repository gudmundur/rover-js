const rover = require('./rover')

describe('Rover reducer', () => {
  test('handles initial state', () => {
    const state = rover(undefined, {})
    expect(state.x).toEqual(0)
    expect(state.y).toEqual(0)
    expect(state.direction).toEqual('NORTH')
  })

  test('handles TURN_LEFT action', () => {
    const tests = [
      [{ direction: 'NORTH' }, 'WEST'],
      [{ direction: 'WEST' }, 'SOUTH'],
      [{ direction: 'SOUTH' }, 'EAST'],
      [{ direction: 'EAST' }, 'NORTH']
    ]

    for (const [initialState, expectedDirection] of tests) {
      const state = rover(initialState, { type: 'TURN_LEFT' })
      expect(state.direction).toEqual(expectedDirection)
    }
  })

  test('handles TURN_RIGHT action', () => {
    const tests = [
      [{ direction: 'NORTH' }, 'EAST'],
      [{ direction: 'EAST' }, 'SOUTH'],
      [{ direction: 'SOUTH' }, 'WEST'],
      [{ direction: 'WEST' }, 'NORTH']
    ]

    for (const [initialState, expectedDirection] of tests) {
      const state = rover(initialState, { type: 'TURN_RIGHT' })
      expect(state.direction).toEqual(expectedDirection)
    }
  })

  test('handles MOVE_FORWARD action', () => {
    const tests = [
      ['NORTH', [0, 1]],
      ['EAST', [1, 0]],
      ['SOUTH', [0, -1]],
      ['WEST', [-1, 0]]
    ]

    for (const [direction, [expectedX, expectedY]] of tests) {
      const initialState = { x: 0, y: 0, direction }
      const state = rover(initialState, { type: 'MOVE_FORWARD' })
      expect(state.x).toEqual(expectedX)
      expect(state.y).toEqual(expectedY)
    }
  })

  test('handles MOVE_BACKWARD action', () => {
    const tests = [
      ['NORTH', [0, -1]],
      ['EAST', [-1, 0]],
      ['SOUTH', [0, 1]],
      ['WEST', [1, 0]]
    ]

    for (const [direction, [expectedX, expectedY]] of tests) {
      const initialState = { x: 0, y: 0, direction }
      const state = rover(initialState, { type: 'MOVE_BACKWARD' })
      expect(state.x).toEqual(expectedX)
      expect(state.y).toEqual(expectedY)
    }
  })
})
