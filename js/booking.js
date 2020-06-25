function getEle(id) {
  return document.getElementById(id);
}
// var seat = new Seat();
var seatManagement = new SeatManagement();
var user = new User();
function renderSeatMap() {
  contentHTML = "";
  var divTag = document.createElement("div");
  var arrSeatNum = seatManagement.makeSeatNum(12);
  var arrSeatName = seatManagement.listSeatName;

  for (let i = 0; i < arrSeatName.length; i++) {
    contentHTML += `
    <div class="seatrow">
      <span class="rowname seat-unclickable">${arrSeatName[i]}</span>`;
    for (let j = 0; j < arrSeatNum.length; j++) {
      contentHTML += `     
        <span class="seat-clickable" data-id="${arrSeatName[i]}${arrSeatNum[j]}">
          <input type="checkbox" id="${arrSeatName[i]}${arrSeatNum[j]}" value="${arrSeatName[i]}${arrSeatNum[j]}" />`;
      if (i >= 3 && i <= 7 && j >= 2 && j <= 9) {
        contentHTML += `
              <label for="${arrSeatName[i]}${arrSeatNum[j]}" class="vip" data-chosable="true" onclick="showClickedSeat('${arrSeatName[i]}${arrSeatNum[j]}')">
                <span class="seatnum">${arrSeatNum[j]}</span>
              </label>
            </span>`;
      } else if (i === 8) {
        contentHTML += `
              <label for="${arrSeatName[i]}${arrSeatNum[j]}" class="couple" data-chosable="true" onclick="showClickedSeat('${arrSeatName[i]}${arrSeatNum[j]}')">
                <span class="seatnum">${arrSeatNum[j]}</span>
              </label>
            </span>
            `;
      } else {
        contentHTML += `
              <label for="${arrSeatName[i]}${arrSeatNum[j]}" data-chosable="true" onclick="showClickedSeat('${arrSeatName[i]}${arrSeatNum[j]}')">
                <span class="seatnum">${arrSeatNum[j]}</span>
              </label>
            </span>
            `;
      }
    }
    contentHTML += `
      <span class="seat-unclickable hideOnMobile"></span>
    </div>`;
  }
  divTag.innerHTML = contentHTML;
  document.querySelector(".listseat").appendChild(divTag);
}
document.addEventListener("DOMContentLoaded", renderSeatMap);
// renderSeatMap()

const countdownTimer = (() => {
  const STARTING_MINUTE = 5;
  let totalTime = STARTING_MINUTE * 60;
  const timeEl = document.getElementById("timewaiting");
  function updateCountdown() {
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    timeEl.innerHTML = `${minutes}:${seconds}`;
    totalTime--;
    totalTime = totalTime < 0 ? 0 : totalTime;
  }
  setInterval(updateCountdown, 1000);
})();

//show seat on click
var output = [];
function showClickedSeat(id) {
  output = user.chonGheNgoi(id);
  tongTien = user.tinhTien() + " đ";

  getEle("demoMoney").innerHTML = tongTien;
  getEle("totalMoney").innerHTML = tongTien;

  getEle("showseat").innerHTML = "";
  getEle("myseat").innerHTML = "";
  output.sort();
  getEle("showseat").innerHTML += output.toString();
  getEle("myseat").innerHTML += output.toString();
}

//show payment details
getEle("btnGoNext").addEventListener("click", function () {
  getEle("seat-section").style.display = "none";
  getEle("pay-section").style.display = "block";
  // this.innerHTML = "Thanh Toán";
  // this.dataset.goto = "pay";
  this.style.display = "none";
  getEle("btnPayMoney").style.display = "block";

  //scroll UI to top
  window.scrollTo(0, 0);

  getEle("btnBack").firstElementChild.setAttribute("href", "#process-section");

  getEle("btnBack").addEventListener("click", function (e) {
    getEle("seat-section").style.display = "block";
    getEle("pay-section").style.display = "none";

    getEle("btnGoNext").style.display = "block";
    getEle("btnPayMoney").style.display = "none";
    //scroll UI to top

    window.scrollTo(0, 0);

    // e.preventDefault();
    setTimeout(function () {
      getEle("btnBack").firstElementChild.setAttribute("href", "./index.html");
    }, 500);
  });
  window.scrollTo(0, 0);

  console.log(this);
});
