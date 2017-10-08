require('./app.js')
require('./auth/api.js')
require('./auth/ui.js')
const events = require('./auth/events.js')

let turnCount = 0
let winner = ''
let playerTurn = 'x'
let xWinCount = 0
let oWinCount = 0
let value
let index
let over

const createBoard = function () {
  $('.gameBoard').show()
  $('#newgame').show()
}

$('#play').click(createBoard)

const addClass = function () {
  if (playerTurn === 'x') {
    if ($(this).hasClass('symO')) {
    } else {
      if ($(this).hasClass('symX')) {
      } else {
        $(this).addClass('symX')
        turnCount++
        console.log(turnCount)
        playerTurn = 'o'
        console.log(playerTurn)
        if ($(this).is('#box1')) {
          value = 'x'
          index = 0
          over = false
          events.onUpdateGame(index, value, over)
        } else if ($(this).is('#box2')) {
          value = 'x'
          index = 1
          over = false
          events.onUpdateGame(index, value, over)
        } else if ($(this).is('#box3')) {
          value = 'x'
          index = 2
          over = false
          events.onUpdateGame(index, value, over)
        } else if ($(this).is('#box4')) {
          value = 'x'
          index = 3
          over = false
          events.onUpdateGame(index, value, over)
        } else if ($(this).is('#box5')) {
          value = 'x'
          index = 4
          over = false
          events.onUpdateGame(index, value, over)
        } else if ($(this).is('#box6')) {
          value = 'x'
          index = 5
          over = false
          events.onUpdateGame(index, value, over)
        } else if ($(this).is('#box7')) {
          value = 'x'
          index = 6
          over = false
          events.onUpdateGame(index, value, over)
        } else if ($(this).is('#box8')) {
          value = 'x'
          index = 7
          over = false
          events.onUpdateGame(index, value, over)
        } else if ($(this).is('#box9')) {
          value = 'x'
          index = 8
          over = false
          events.onUpdateGame(index, value, over)
        }
      }
    }
  } else {
    if ($(this).hasClass('symX')) {
    } else {
      if ($(this).hasClass('symO')) {
      } else {
        $(this).addClass('symO')
        turnCount++
        console.log(turnCount)
        playerTurn = 'x'
        console.log(playerTurn)
        if ($(this).is('#box1')) {
          value = 'o'
          index = 0
          over = false
          events.onUpdateGame(index, value, over)
        } else if ($(this).is('#box2')) {
          value = 'o'
          index = 1
          over = false
          events.onUpdateGame(index, value, over)
        } else if ($(this).is('#box3')) {
          value = 'o'
          index = 2
          over = false
          events.onUpdateGame(index, value, over)
        } else if ($(this).is('#box4')) {
          value = 'o'
          index = 3
          over = false
          events.onUpdateGame(index, value, over)
        } else if ($(this).is('#box5')) {
          value = 'o'
          index = 4
          over = false
          events.onUpdateGame(index, value, over)
        } else if ($(this).is('#box6')) {
          value = 'o'
          index = 5
          over = false
          events.onUpdateGame(index, value, over)
        } else if ($(this).is('#box7')) {
          value = 'o'
          index = 6
          over = false
          events.onUpdateGame(index, value, over)
        } else if ($(this).is('#box8')) {
          value = 'o'
          index = 7
          over = false
          events.onUpdateGame(index, value, over)
        } else if ($(this).is('#box9')) {
          value = 'o'
          index = 8
          over = false
          events.onUpdateGame(index, value, over)
        }
      }
    }
  }
}

$('.box').click(addClass)

const checkForWin = function () {
  if (
    ($('#box1').hasClass('symX') && $('#box2').hasClass('symX') && $('#box3').hasClass('symX')) ||
    ($('#box1').hasClass('symX') && $('#box4').hasClass('symX') && $('#box7').hasClass('symX')) ||
    ($('#box1').hasClass('symX') && $('#box5').hasClass('symX') && $('#box9').hasClass('symX')) ||
    ($('#box4').hasClass('symX') && $('#box5').hasClass('symX') && $('#box6').hasClass('symX')) ||
    ($('#box7').hasClass('symX') && $('#box8').hasClass('symX') && $('#box9').hasClass('symX')) ||
    ($('#box2').hasClass('symX') && $('#box5').hasClass('symX') && $('#box8').hasClass('symX')) ||
    ($('#box3').hasClass('symX') && $('#box6').hasClass('symX') && $('#box9').hasClass('symX')) ||
    ($('#box3').hasClass('symX') && $('#box5').hasClass('symX') && $('#box7').hasClass('symX'))
  ) {
    winner = 'playerX'
    console.log(winner + ' has won the game')
    xWinCount++
    console.log('X has won ' + xWinCount + ' games')
    $('.gameBoard').hide()
    $('#xWins').show()
  } else if (
    ($('#box1').hasClass('symO') && $('#box2').hasClass('symO') && $('#box3').hasClass('symO')) ||
    ($('#box1').hasClass('symO') && $('#box4').hasClass('symO') && $('#box7').hasClass('symO')) ||
    ($('#box1').hasClass('symO') && $('#box5').hasClass('symO') && $('#box9').hasClass('symO')) ||
    ($('#box4').hasClass('symO') && $('#box5').hasClass('symO') && $('#box6').hasClass('symO')) ||
    ($('#box7').hasClass('symO') && $('#box8').hasClass('symO') && $('#box9').hasClass('symO')) ||
    ($('#box2').hasClass('symO') && $('#box5').hasClass('symO') && $('#box8').hasClass('symO')) ||
    ($('#box3').hasClass('symO') && $('#box6').hasClass('symO') && $('#box9').hasClass('symO')) ||
    ($('#box3').hasClass('symO') && $('#box5').hasClass('symO') && $('#box7').hasClass('symO'))
  ) {
    winner = 'playerO'
    console.log(winner + ' has won the game')
    oWinCount++
    console.log('O has won ' + oWinCount + ' games')
    $('.gameBoard').hide()
    $('#oWins').show()
  } else if (turnCount === 9) {
    console.log('draw')
    $('.gameBoard').hide()
    $('#resultDraw').show()
  }
}

$('.box').click(checkForWin)

const gameRestart = function () {
  $('#box1').removeClass('symX symO')
  $('#box2').removeClass('symX symO')
  $('#box3').removeClass('symX symO')
  $('#box4').removeClass('symX symO')
  $('#box5').removeClass('symX symO')
  $('#box6').removeClass('symX symO')
  $('#box7').removeClass('symX symO')
  $('#box8').removeClass('symX symO')
  $('#box9').removeClass('symX symO')
  winner = ' '
  turnCount = 0
  playerTurn = 'x'
  $('.gameBoard').show()
}

$('#newgame').click(gameRestart)
