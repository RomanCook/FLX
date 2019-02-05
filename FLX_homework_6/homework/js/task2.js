let money, discount, price_discount, saved;

money = prompt('Enter amount of money in range 0 to 9999999');
discount = prompt('Enter amount of discount in range 0 to 99');

if (money < 0 || discount < 0 || money > 9999999 || discount > 99 || money === null || discount === null || isNaN(money)
    || isNaN(discount)) {
    alert(`For input data ${money}(price) and ${discount}(discount):\n      'Invalid input data'`);
} else {
    price_discount = money - money * discount / 100;
    saved = money - price_discount;
    if (Math.ceil(price_discount) - price_discount === 0) {
        price_discount = Math.ceil(price_discount)
    } else {
        price_discount = price_discount.toFixed(2)
    }
    if (Math.ceil(saved) - saved === 0) {
        saved = Math.ceil(saved)
    } else {
        saved = saved.toFixed(2)
    }

    alert(`For input data ${money}(price) and ${discount}(discount):\n      Price without discount: ${money}
      Discount: ${discount}%\n      Price with discount: ${price_discount}\n      Saved: ${saved}`);
}
