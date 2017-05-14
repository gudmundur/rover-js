const Rover = require('./rover').Rover
const Directions = require('./rover').Directions

describe('Rover', () => {
  test('constructor', () => {
    const rover = new Rover(0, 0)
    expect(rover.x).toEqual(0)
    expect(rover.y).toEqual(0)
    expect(rover.direction).toEqual(Directions.NORTH)
  })

  test('turnLeft', () => {
    const tests = [
      [Directions.NORTH, Directions.WEST],
      [Directions.WEST, Directions.SOUTH],
      [Directions.SOUTH, Directions.EAST],
      [Directions.EAST, Directions.NORTH]
    ]

    for (const [direction, expectedDirection] of tests) {
      const rover = new Rover(0, 0, direction)
      rover.turnLeft()
      expect(rover.direction).toEqual(expectedDirection)
    }
  })

  test('turnRight', () => {
    const tests = [
      [Directions.NORTH, Directions.EAST],
      [Directions.EAST, Directions.SOUTH],
      [Directions.SOUTH, Directions.WEST],
      [Directions.WEST, Directions.NORTH]
    ]

    for (const [direction, expectedDirection] of tests) {
      const rover = new Rover(0, 0, direction)
      rover.turnRight()
      expect(rover.direction).toEqual(expectedDirection)
    }
  })

  test('moveForward', () => {
    const tests = [
      [Directions.NORTH, [0, 1]],
      [Directions.EAST, [1, 0]],
      [Directions.SOUTH, [0, -1]],
      [Directions.WEST, [-1, 0]]
    ]

    for (const [direction, [expectedX, expectedY]] of tests) {
      const rover = new Rover(0, 0, direction)
      rover.moveForward()
      expect(rover.x).toEqual(expectedX)
      expect(rover.y).toEqual(expectedY)
    }
  })
})
