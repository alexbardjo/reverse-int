module.exports = function reverse (n) {
    const arrNumber = String(n).split('');
    if (arrNumber[0] === '-'){
        return Number(arrNumber.slice(1).reverse().join(''));

    } else {
        return Number(arrNumber.reverse().join(''));

    }
};


