class Math {
    sum(firstValue, secondValue) {
        return firstValue + secondValue
    }

    asyncSum(firstValue, secondValue, callback) {
        setTimeout(() => {
            const result = firstValue + secondValue

            callback(result)
        }, 1000)
    }

    lazyAsyncSum(firstValue, secondValue, callback) {
        setTimeout(() => {
            const result = firstValue + secondValue

            callback(result)
        }, 2500)
    }

    multiply(firstValue, secondValue) {
        return firstValue * secondValue
    }
}

module.exports = Math