// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener('contextmenu', makeGreen)
  }
  for (var j = 0; j < dots.length; j++) {
    dots[j].addEventListener('click', makeBlue)
  }
  for (var k = 0; k < dots.length; k++) {
    dots[k].addEventListener('dblclick', hide)
  }
}

function makeGreen (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('green')
  updateCounts()
}

// CREATE FUNCTION makeBlue HERE

function makeBlue (evt) {
  evt.target.classList.toggle('blue')
  updateCounts()
}

// CREATE FUNCTION hide HERE

function hide (evt) {
  evt.target.classList.toggle('invisible')
  updateCounts()
}


function updateCounts () {
  var allTheDots= document.getElementsByClassName('board')[0].children
  var totals = {
    blue: 0,
    green: 0,
    invisible: 0
  }
  for (var l = 0; l < allTheDots.length; l++) {
    if (allTheDots[l].classList.contains('blue')) {
         totals.blue = totals.blue + 1;
    }
  }
  for (var m = 0; m < allTheDots.length; m++) {
    if (allTheDots[m].classList.contains('green')) {
         totals.green = totals.green + 1;
    }
  }
  for (var n = 0; n < allTheDots.length; n++) {
    if (allTheDots[n].classList.contains('invisible')) {
         totals.invisible = totals.invisible + 1;
    }
  }

  // Once you've done the counting, this function will update the display
  displayTotals(totals)
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
