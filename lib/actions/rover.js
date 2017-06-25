const turnLeft = () => ({
  type: 'TURN_LEFT'
})

const turnRight = () => ({
  type: 'TURN_RIGHT'
})

const moveForward = () => ({
  type: 'MOVE_FORWARD'
})

const moveBackward = () => ({
  type: 'MOVE_BACKWARD'
})

module.exports = {
  turnLeft,
  turnRight,
  moveForward,
  moveBackward
}
