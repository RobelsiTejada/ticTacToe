const win = function () {
  if ($('#b1') === $('#b2') && $('#b2') === $('#b3') && $('#b1') === $('#b3')) {
    alert('winner')
  } else if ($('#b1') === $('#b2') && $('#b2') === $('#b9') && $('#b1') === $('#b9')) {
    alert('winner')
  } else if ($('#b1') === $('#b4') && $('#b4') === $('#b7') && $('#b1') === $('#b7')) {
    alert('winner')
  } else if ($('#b2') === $('#b5') && $('#b5') === $('#b8') && $('#b2') === $('#b8')) {
    alert('winner')
  } else if ($('#b3') === $('#b6') && $('#b6') === $('#b9') && $('#b3') === $('#b9')) {
    alert('winner')
  } else if ($('#b4') === $('#b5') && $('#b5') === $('#b6') && $('#b4') === $('#b6')) {
    alert('winner')
  } else if ($('#b7') === $('#b5') && $('#b5') === $('#b3') && $('#b7') === $('#b3')) {
    alert('winner')
  } else if ($('#b7') === $('#b8') && $('#b8') === $('#b9') && $('#b7') === $('#b9')) {
    alert('winner')
  }
}

const tie = function () {

}

module.exports = {
  win,
  tie
}
