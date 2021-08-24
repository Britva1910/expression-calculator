function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    expr = expr.split(' ').join('');
    console.log(expr);

    //division by 0 check
    if (expr.includes('/0')) throw Error('TypeError: Division by zero.') //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/includes

    //проверка на парность скобок
    let checkLeft = [];
    let checkRight = [];

    for (let i = 0; i < expr.length; i++) {
        if (expr[i] === ')') {
            checkRight.push(expr[i])
        } else if (expr[i] === '(') {
            checkLeft.push(expr[i])
        }
    }

    if (checkLeft.length != checkRight.length) {
        throw Error('ExpressionError: Brackets must be paired');
    }


    return new Function(`return ${expr}`)(); //https://learn.javascript.ru/new-function
}

module.exports = {
    expressionCalculator
}