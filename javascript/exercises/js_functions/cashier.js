cashier(3.79, 50);
cashier(13.75, 40);
cashier(1.74, 5);
cashier(10.75, 5);
cashier(33, 50);
cashier(33.12, 44);
cashier(22.13, 44);


function calculateCurrency(curr, amount){
    if(curr <= amount && amount > 0){
        let num = Math.floor(amount / curr);
        console.log(`${num} x ${curr}€`)
        let change = amount - curr*num
        return change.toFixed(2);
    } else return amount;
}

function calculateChange(price, paid){
    let change = (paid - price).toFixed(2)
    if(change > 0)
        console.log(`Price: ${price}€\nPaid amount: ${paid}€\nChange: ${change}€`)
    else console.log(`Give me more money bruder.`)

    return change;
}

function cashier(price, paid) {
    let curr1 = 20, 
        curr2 = 10,
        curr3 = 5,
        curr4 = 2,
        curr5 = 1,
        curr6 = .5
        curr7 = .2,
        curr8 = .1,
        curr9 = .05,
        curr10 = .02,
        curr11 = .01;

    let change = calculateChange(price, paid)
    change = calculateCurrency(curr1, change)
    change = calculateCurrency(curr2, change)
    change = calculateCurrency(curr3, change)
    change = calculateCurrency(curr4, change)
    change = calculateCurrency(curr5, change)
    change = calculateCurrency(curr6, change)
    change = calculateCurrency(curr7, change)
    change = calculateCurrency(curr8, change)
    change = calculateCurrency(curr9, change)
    change = calculateCurrency(curr10, change)
    change = calculateCurrency(curr11, change)

    console.log(`===========================`)
}