//return first matching item given selector
function getFirstSelector(selector) {
  var firstMatch = document.querySelector(`${selector}`)
  return firstMatch
}

//return item by specifying item class within parent item id
function nestedTarget() {
  var targetItem = document.querySelector(`#nested .target`)
  return targetItem
}

//increase values in all ranked-list class items by supplied value n
function increaseRankBy(n) {
  var ranks = document.querySelector(`.ranked-list`).querySelectorAll(`li`)
  //what is the value of ranks? perhaps for loop is correct but ranks is wack
  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = (parseInt(ranks[i].innerHTML) + parseInt(n)).toString()
  }
}

//pull out most deeply nested child from div with id 'grand-node'
//try do while where you keep adding li string to query lol
function deepestChild() {
  var currentDivList = document.querySelectorAll(`.grand-node div`)
  var nextDivList = []
  while (currentDivList) {
    if(currentDivList[0].innerHTML === 'boo!') {
      return currentDivList[0]
    }
    
    if (Array.isArray(currentDivList)) {
      for (let i = 0; i < currentDivList.length; i++) {
        nextDivList.push(currenDivList[i])
      }
    }
  }
}