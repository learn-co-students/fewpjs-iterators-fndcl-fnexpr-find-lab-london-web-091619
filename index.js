const testVar = {};

function testFunc() {
  return "hi";
}

function superbowlWin(record) {
  let result = record.find(season => season.result === "W");
  return result ? result.year : result;
}
