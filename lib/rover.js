
const NORTH = Symbol('NORTH')
const WEST = Symbol('WEST')
const SOUTH = Symbol('SOUTH')
const EAST = Symbol('EAST')

const Directions = {
  NORTH,
  WEST,
  SOUTH,
  EAST
}

class Rover {
  constructor (x, y, direction = NORTH) {
    this.x = x
    this.y = y
    this.direction = direction
  }

  turnLeft () {
    switch (this.direction) {
      case NORTH:
        this.direction = WEST
        break
      case WEST:
        this.direction = SOUTH
        break
      case SOUTH:
        this.direction = EAST
        break
      case EAST:
        this.direction = NORTH
        break
    }
  }

  turnRight () {
    switch (this.direction) {
      case NORTH:
        this.direction = EAST
        break
      case EAST:
        this.direction = SOUTH
        break
      case SOUTH:
        this.direction = WEST
        break
      case WEST:
        this.direction = NORTH
        break
    }
  }

  moveForward () {
    switch (this.direction) {
      case NORTH:
        this.y = this.y + 1
        break
      case EAST:
        this.x = this.x + 1
        break
      case SOUTH:
        this.y = this.y - 1
        break
      case WEST:
        this.x = this.x - 1
        break
    }
  }
}

module.exports = {
  Rover,
  Directions
}
