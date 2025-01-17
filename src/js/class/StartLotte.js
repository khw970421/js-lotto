import { $, app } from "../utils/constant.js";
import { alertMessage } from "../utils/errorMessage.js";
import { ProcessingLotte } from "./ProcessingLotte.js";

class StartLotte extends ProcessingLotte {
  constructor() {
    super();
    this.start();
    this.isNumberOpen = true;
    this.winningNumberArr = [];

    this.myLotteNumberArr = [];
    this.bonusNumber = -Infinity;
    this.beforeNumberArr = [];
    this.beforeBonusNum = -Infinity;

    this.myLotteNumsFromDom = [];
    this.correctNum = 0;
    this.compareBonus = false;
    this.randomValue = 0;
    this.earning = 0;

    this.winNumber = {
      threeSameNum: 0,
      fourSameNum: 0,
      fiveSameNum: 0,
      fiveBonusSameNum: 0,
      sixSameNum: 0,
    };
  }

  start() {
    document.body.innerHTML = app;
    $("#payBtn").addEventListener("click", () => {
      this.checkPayment();
    });
  }

  checkPayment() {
    const payment = Number($(".pl-2").value);
    if (payment % 1000 !== 0) {
      alert(alertMessage.numInTheThousands);
    } else if (payment === 0) {
      alert(alertMessage.numIsZero);
    } else {
      this.clickBuyBtn(payment);
    }
  }
}

export { StartLotte };
