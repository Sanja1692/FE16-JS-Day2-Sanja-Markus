// INPUT num

// If num / 10 = 0

// ELSE
//     "You can only withdraw a multiple of ten!"
// count100 = num / 100;
// count50 = rest / 50;
// count20 = rest / 20;
// count10 = rest / 10;

// OUTPUT
// count100, count50, count20, count10

function bankomat(geld) {
    let hundred = Math.floor(geld / 100);
    let rest = geld % 100;
    let fifty = Math.floor(geld / 50);
    rest = rest % 50;
    let twenty = Math.floor(geld / 20);
    rest = rest % 20;
    let ten = Math.floor(geld / 10);
    rest = rest % 10;
    console.log("Your withdrawl will be split in " + hundred + " 100-dollar-bill(s), " + fifty + " 50-dollar-bill(s), " + twenty + " 20-dollar-bill(s) and " + ten + " 10-dollar-bill(s). For the rest amount of " + rest + " dollar(s), there are no fitting bank notes. Have a great day!")

}
bankomat(1276);

function ATM(amount) {
    let h = Math.floor(amount / 100);
    let f = Math.floor((amount % 100) / 50);
    let tw = Math.floor(((amount % 100) % 50) / 20);
    let t = Math.floor((((amount % 100) % 50) % 20) / 10);
    let r = Math.floor((((amount % 100) % 50) % 20) % 10);
    let result = [h, f, tw, t, r];
    console.log("hundred: " + h, ",fifty: " + f, ",twenty: " + tw, ",ten: " + t, "rest: " + r);
    return result;
}
ATM(531);