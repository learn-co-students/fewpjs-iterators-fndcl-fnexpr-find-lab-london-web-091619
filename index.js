function superbowlWin(objArray) {
  const win = objArray.find(obj => obj.result === "W")
  return win && win.year
}
