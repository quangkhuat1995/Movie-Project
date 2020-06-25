function User() {
  this.numberOfSeat = [];
  this.GIA_VE = parseFloat(55.0);
  this.chonGheNgoi = function (id) {
    // var numberOfSeat = [];
    if (getEle(id).checked == false) {
      this.numberOfSeat.push(id);
    } else {
      this.numberOfSeat.splice(this.numberOfSeat.indexOf(id), 1);
    }
    return this.numberOfSeat;
  };
  this.tinhTien = function () {
    let tongTien = 0;
    tongTien = this.numberOfSeat.length * this.GIA_VE;
    return tongTien.toFixed(3);
  };
}
