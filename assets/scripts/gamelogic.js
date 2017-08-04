$(function () {
  let player = 1
  const table = $('table')
  const messages = $('.messages')
  const turn = $('.turn')
  nextPlayer(turn, player)

  $('td').click(function () {
    const td = $(this)
    const state = getState(td)
    if (!state) {
      const pattern = playerPiece(player)
      changeState(td, pattern)
      if (checkForWin(table, pattern)) {
        messages.html('Ninja ' + player + ' is the victor!!!')
        turn.html('')
      } else {
        player = setNextPlayer(player)
        nextPlayer(turn, player)
      }
    } else {
      messages.html('You\'re nindo is weak!!!')
    }
  })

  $('.reset').click(function () {
    player = 1
    messages.html('')
    reset(table)
    nextPlayer(turn, player)
  })
})

function getState (td) {
  if (td.hasClass('cross') || td.hasClass('circle')) {
    return 1
  } else {
    return 0
  }
}

function changeState (td, pattern) {
  return td.addClass(pattern)
}

function playerPiece (player) {
  if (player === 1) {
    return 'cross'
  } else {
    return 'circle'
  }
}

function setNextPlayer (player) {
  if (player === 1) {
    return (player = 2)
  } else {
    return (player = 1)
  }
}

function nextPlayer (turn, player) {
  turn.html('Ninja ' + player + '\'s turn')
}

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

function reset (table) {
  table.find('td').each(function () {
    $(this).removeClass('circle').removeClass('cross')
  })
}
