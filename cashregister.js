function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    var currencyValues = { 0: 100, 1: 20, 2: 10, 3: 5, 4: 1, 5: 0.25, 6: 0.10, 7: 0.05, 8: 0.01 };
    console.log(totalInDrawer(cid));
    if (change > totalInDrawer(cid) || enoughCurrencyValue(cid, change, currencyValues) === false) {
        return 'Insufficient Funds';
    } else if (change == totalInDrawer(cid)) {
        return 'Closed';
    }
    var ticket = createTicket(cid, change, currencyValues);
    // Here is your change, ma'am.
    return ticket;
}

function enoughCurrencyValue(cid, change, values) {
    var lower = cid.reverse().filter(function(item, index) {
        if (values[index] <= change || (item[1] >= change && values[index] <= change)) return item;
    }, []);
    return totalInDrawer(lower) >= change;
}

function createTicket(cid, change, currencyValues) {

    var ticket = cid.filter(function(current, index) {
        let changeAcc = 0;
        while (current[1] >= currencyValues[index] && current[1] >= 0 && currencyValues[index] <= change && change > 0) {
            if (enoughCurrency(currencyValues[index], current[1])) {
                change = change.toFixed(2);
                change -= currencyValues[index];
                current[1] -= currencyValues[index];
                changeAcc += currencyValues[index];
            }
        }
        if (changeAcc > 0) {
            current[1] = changeAcc;
            return current;
        }
    });
    return ticket;
}
// test here
checkCashRegister(19.5, 20.0, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90.0],
    ["FIVE", 55.0],
    ["TEN", 20.0],
    ["TWENTY", 60.0],
    ["ONE HUNDRED", 100.0]
]);