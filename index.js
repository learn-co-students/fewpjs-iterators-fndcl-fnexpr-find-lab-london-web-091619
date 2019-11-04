const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  let thing = record.find( record => record.result === "W" )
  return !thing ? undefined : thing.year
  }
