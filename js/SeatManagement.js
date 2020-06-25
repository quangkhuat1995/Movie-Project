function SeatManagement() {
  this.listSeatName = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
  this.listSeatNum = [];

  this.makeSeatNum = function (numOfCols) {
    prefix = "0";
    for (let i = 1; i <= numOfCols; i++) {
      if (i.toString().length < 2) {
        i = prefix + i.toString();
      } else {
        i = i.toString();
      }
      this.listSeatNum.push(i.toString());
    }
    return this.listSeatNum;
  };
}
