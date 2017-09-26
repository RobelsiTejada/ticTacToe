require('./app.js')
require('./auth/events.js')
require('./auth/api.js')
require('./auth/ui.js')

// on page load
$(function () {
  $('table').hide()
  $('#newpassword').hide()
  $('#checkout').hide()
  $('#passwordChange').hide()
  $('#newuser2').hide()
  $('#logedin').hide()
  $('#authenticate').show()
  $('#newuser').show()
  $('#login').show()
  let player = 1
  const table = $('table')
  const messages = $('.messages')
  const turn = $('.turn')
  turn.html('')
  messages.html('You must sign in or sign up to play this game')
  let moveCount = 0

  // click on board piece, checks for win or draw or if piece has a value
  $('td').click(function () {
    const td = $(this)
    const state = getState(td) // Checks if board piece has already been taken

    if (state) {
      const pattern = playerPiece(player) // selects player and assigns player a piece X or O
      moveCount++
      changeState(td, pattern) // if empty adds the class of corresponding player
      if (checkForWin(table, pattern)) { // Checks for win
        messages.html('Ninja ' + player + ' is the victor!!!')
        turn.html('')
        reset(table)
        nextPlayer(turn, player)
        moveCount = 0
        results(player)
      } else if (moveCount >= 9) { // Checks for draw
        messages.html('Match draw, pathetic!!!')
        turn.html('')
        reset(table)
        nextPlayer(turn, player)
        moveCount = 0
        results()
      } else {
        player = setNextPlayer(player) // let next player know its their turn
        nextPlayer(turn, player)
        messages.html('')
      }
    } else {
      messages.html('You\'re nindo is weak, try again!!!') // message sent if board piece was alreay taken
    }
  })
})

function results (player) {
  const ninja1wins = $('.ninja1wins')
  const ninja2wins = $('.ninja2wins')
  const draw = $('.draw')
  let result = ('.result')

  if (player === 1) {
    return (ninja1wins.html(result = result++))
  } else if (player === 2) {
    return (ninja2wins.html(result = result++))
  } else {
    return (draw.html(result = result++))
  }
}
// Checks if board piece has already been taken
function getState (td) {
  if (td.hasClass('cross') || td.hasClass('circle')) {
    return 0
  } else {
    return 1
  }
}
// if empty adds the class to corresponding player
function changeState (td, pattern) {
  return td.addClass(pattern)
}
// selects player and assigns player a piece X or O
function playerPiece (player) {
  if (player === 1) {
    return 'cross'
  } else {
    return 'circle'
  }
}
// switches turns
function setNextPlayer (player) {
  if (player === 1) {
    return (player = 2)
  } else {
    return (player = 1)
  }
}
// sends message to page on who's turn it is
function nextPlayer (turn, player) {
  turn.html('Ninja ' + player + '\'s turn')
}
// check for win logic, looks for pattern equality in winning combinations
function checkForWin (table, pattern) {
  let won = 0
  if (table.find('.box1').hasClass(pattern) && table.find('.box2').hasClass(pattern) && table.find('.box3').hasClass(pattern)) {
    won = 1
  } else if (table.find('.box1').hasClass(pattern) && table.find('.box4').hasClass(pattern) && table.find('.box7').hasClass(pattern)) {
    won = 1
  } else if (table.find('.box1').hasClass(pattern) && table.find('.box5').hasClass(pattern) && table.find('.box9').hasClass(pattern)) {
    won = 1
  } else if (table.find('.box4').hasClass(pattern) && table.find('.box5').hasClass(pattern) && table.find('.box6').hasClass(pattern)) {
    won = 1
  } else if (table.find('.box7').hasClass(pattern) && table.find('.box8').hasClass(pattern) && table.find('.box9').hasClass(pattern)) {
    won = 1
  } else if (table.find('.box2').hasClass(pattern) && table.find('.box5').hasClass(pattern) && table.find('.box8').hasClass(pattern)) {
    won = 1
  } else if (table.find('.box3').hasClass(pattern) && table.find('.box6').hasClass(pattern) && table.find('.box9').hasClass(pattern)) {
    won = 1
  } else if (table.find('.box3').hasClass(pattern) && table.find('.box5').hasClass(pattern) && table.find('.box7').hasClass(pattern)) {
    won = 1
  }
  return won
}

// for resetting table if win or draw occurs
function reset (table) {
  table.find('td').each(function () {
    $(this).removeClass('circle').removeClass('cross')
  })
}
