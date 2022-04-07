class Math {
    sum(firstValue = 0, secondValue = 0) {
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

    printSum(_req, res, ...rest) {
        res.load('index', this.sum(rest[0], rest[1]))
    }
}

module.exports = Math