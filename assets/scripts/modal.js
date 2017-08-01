$(function () {
  const $formLogin = $('#login-form')
  const $formLost = $('#lost-form')
  const $formRegister = $('#register-form')
  const $divForms = $('#div-forms')
  const $modalAnimateTime = 300
  const $msgAnimateTime = 150
  const $msgShowTime = 2000

  $('form')
    .submit(function () {
      switch (this.id) {
        case 'login-form':
          const $lgUsername = $('#login_username').val()
          const $lgPassword = $('#login_password').val()
          if ($lgUsername || $lgPassword === 'ERROR') {
            msgChange($('#div-login-msg'), $('#icon-login-msg'), $('#text-login-msg'), 'error', 'glyphicon-remove', 'Login error')
          } else {
            msgChange($('#div-login-msg'), $('#icon-login-msg'), $('#text-login-msg'), 'success', 'glyphicon-ok', 'Login OK')
          }
          return false
        case 'lost-form':
          const $lsEmail = $('#lost_email').val()
          if ($lsEmail === 'ERROR') {
            msgChange($('#div-lost-msg'), $('#icon-lost-msg'), $('#text-lost-msg'), 'error', 'glyphicon-remove', 'Send error')
          } else {
            msgChange($('#div-lost-msg'), $('#icon-lost-msg'), $('#text-lost-msg'), 'success', 'glyphicon-ok', 'Send OK')
          }
          return false
        case 'register-form':
          const $rgUsername = $('#register_username').val()
          const $rgEmail = $('#register_email').val()
          const $rgPassword = $('#register_password').val()
          if ($rgUsername || $rgEmail || $rgPassword === 'ERROR') {
            msgChange($('#div-register-msg'), $('#icon-register-msg'), $('#text-register-msg'), 'error', 'glyphicon-remove', 'Register error')
          } else {
            msgChange($('#div-register-msg'), $('#icon-register-msg'), $('#text-register-msg'), 'success', 'glyphicon-ok', 'Register OK')
          }
          return false
        default:return false
      }
    })

  $('#login_register_btn')
    .click(function () {
      modalAnimate($formLogin, $formRegister)
    })
  $('#register_login_btn')
    .click(function () {
      modalAnimate($formRegister, $formLogin)
    })
  $('#login_lost_btn')
    .click(function () {
      modalAnimate($formLogin, $formLost)
    })
  $('#lost_login_btn')
    .click(function () {
      modalAnimate($formLost, $formLogin)
    })
  $('#lost_register_btn')
    .click(function () {
      modalAnimate($formLost, $formRegister)
    })
  $('#register_lost_btn')
    .click(function () {
      modalAnimate($formRegister, $formLost)
    })

  function modalAnimate ($oldForm, $newForm) {
    const $oldH = $oldForm.height()
    const $newH = $newForm.height()
    $divForms.css('height', $oldH)
    $oldForm.fadeToggle($modalAnimateTime, function () {
      $divForms.animate({
        height: $newH
      }, $modalAnimateTime, function () {
        $newForm.fadeToggle($modalAnimateTime)
      })
    })
  }

  function msgFade ($msgId, $msgText) {
    $msgId.fadeOut($msgAnimateTime, function () {
      $(this)
        .text($msgText)
        .fadeIn($msgAnimateTime)
    })
  }

  function msgChange ($divTag, $iconTag, $textTag, $divClass, $iconClass, $msgText) {
    const $msgOld = $divTag.text()
    msgFade($textTag, $msgText)
    $divTag.addClass($divClass)
    $iconTag.removeClass('glyphicon-chevron-right')
    $iconTag.addClass($iconClass + ' ' + $divClass)
    setTimeout(function () {
      msgFade($textTag, $msgOld)
      $divTag.removeClass($divClass)
      $iconTag.addClass('glyphicon-chevron-right')
      $iconTag.removeClass($iconClass + ' ' + $divClass)
    }, $msgShowTime)
  }
})

module.exports = {

}
