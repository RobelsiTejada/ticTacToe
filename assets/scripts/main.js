'use strict'

// const getFormFields = require('../../../lib/get-form-fields')
function Chat () {
  this.update = updateChat
  this.send = sendChat
  this.getState = getStateOfChat
}

// gets the state of the chat
function getStateOfChat () {
  event.preventDefault()
  if (!instanse) {
    instanse = true
    $.ajax({
      type: 'POST',
      url: 'post.php',
      data: {
        'function': 'getState',
        'file': file
      },
      dataType: 'json',
      success: function (data) {
        state = data.state
        instanse = false
      }
    })
  }
}

// Updates the chat
function updateChat () {
  event.preventDefault()
  if (!instanse) {
    instanse = true
    $.ajax({
      type: 'POST',
      url: 'post.php',
      data: {
        'function': 'update',
        'state': state,
        'file': file
      },
      dataType: 'json',
      success: function (data) {
        if (data.text) {
          for (let i = 0; i < data.text.length; i++) {
            $('#chat-area')
              .append($(

                '+ data.text[i] +'

              ))
          }
        }
        document.getElementById('chat-area')
          .scrollTop = document.getElementById('chat-area')
            .scrollHeight
        instanse = false
        state = data.state
      }
    })
  } else {
    setTimeout(updateChat, 1500)
  }
}

// send the message
function sendChat (message, nickname) {
  event.preventDefault()
  updateChat()
  $.ajax({
    type: 'POST',
    url: 'post.php',
    data: {
      'function': 'send',
      'message': message,
      'nickname': nickname,
      'file': file
    },
    dataType: 'json',
    success: function (data) {
      updateChat()
    }
  })
}

// ask user for name with popup prompt
let name = prompt('Enter your chat name:', 'Guest')

// default name is 'Guest'
if (!name || name === ' ') {
  name = 'Guest'
}

// strip tags
name = name.replace(/(<([^>]+)>)/ig, '')

// display name on page
$('#name-area')
  .html('<span>' + name + '</span>')

// kick off chat
const chat = new Chat()

$(function () {
  event.preventDefault()
  chat.getState()

  // watch textarea for key presses
  $('#sendie')
    .keydown(function (event) {
      const key = event.which

      // all keys including return.
      if (key >= 30) {
        const maxLength = $(this)
          .attr('maxlength')
        const length = this.value.length

        // don't allow new content if length is maxed out
        if (length >= maxLength) {
          event.preventDefault()
        }
      }
    })
    // watch textarea for release of key press
  $('#sendie')
    .keyup(function (e) {
      event.preventDefault()
      if (e.keyCode === 13) {
        const text = $(this)
          .val()
        const maxLength = $(this)
          .attr('maxlength')
        const length = text.length

        // send
        if (length <= maxLength + 1) {
          chat.send(text, name)
          $(this)
            .val('')
        } else {
          $(this)
            .val(text.substring(0, maxLength))
        }
      }
    })
})

module.exports = {
}
