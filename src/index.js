module.exports = function reverse (n) {
    // стринг - разворот - обратно в инт
    const reversedNumber = parseInt(String(Math.abs(n)).split('').reverse().join(''));
    
    // возвращаем развернутый инт
    return reversedNumber;
}