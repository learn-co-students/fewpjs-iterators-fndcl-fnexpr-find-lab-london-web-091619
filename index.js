const testVar = {}

function testFunc() {
  return "hi"
}



function superbowlWin(array){
  let found = array.find(record => record.result === "W")
  return found ? found.year : found
}

