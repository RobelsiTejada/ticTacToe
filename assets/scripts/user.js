
function user (userName, email, avatar, gamePiece, victories) {
  this.userName = userName
  this.email = email
  this.avatar = avatar
  this.gamePiece = gamePiece
  this.victories = victories
}

function ai (userName, avatar) {
  this.userName = 'Ninja Master'
  this.avatar = avatar
}

module.exports = {
  user,
  ai
}
