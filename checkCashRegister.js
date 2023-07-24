function checkCashRegister(price, cash, cid) {
  const currencyUnit = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  let totalCid = 0;
  for (const [currency, amount] of cid) {
    totalCid += amount;
  }

  let changeDue = cash - price;
  let change = [];

  if (cash < price) {
    return { status: "INVALID_PAYMENT", change: [] };
  } else if (totalCid === changeDue) {
    return { status: "CLOSED", change: cid };
  } else if (totalCid < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else {
    for (let i = cid.length - 1; i >= 0; i--) {
      const currency = cid[i][0];
      const unitValue = currencyUnit[currency];
      let numCurrency = Math.floor(changeDue / unitValue);

      if (numCurrency > 0) {
        let amountToUse = 0;
        if (numCurrency * unitValue <= cid[i][1]) {
          amountToUse = numCurrency * unitValue;
        } else {
          amountToUse = cid[i][1];
        }

        changeDue -= amountToUse;
        changeDue = parseFloat(changeDue.toFixed(2));
        change.push([currency, amountToUse]);
      }
    }

    if (changeDue !== 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change: change };
  }
}
