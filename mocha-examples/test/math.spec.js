const assert = require('assert')
const Math = require('../src/Math')

let value = 1

describe('Math class', function () {
    // Hooks
    before(function() {
        // This hook run before all tests.

        // Code...
    })

    beforeEach(function() {
        // This hook run before each "it" description.

        value = 5
    })

    after(function() {
        // This hook run after run all tests.

        // Code...
    })

    afterEach(function() {
        // This hook run after each "it" description.

        // Code...
    })


    it('Sum two numbers', function () {
        const math = new Math()

        assert.equal(math.sum(value, 5), 10)
    })

    it('Sum two numbers with async method', function (done) {
        const math = new Math()

        math.asyncSum(5, 5, result => {
            assert.equal(result, 10)
            done()
        })
    })

    it('Sum two numbers with async method and time more than 2500ms', function (done) {
        const math = new Math()

        math.lazyAsyncSum(5, 5, (result) => {
            assert.equal(result, 10)
            done()
        })
    }).timeout(3000)

    it('Multiply two numbers - Pending test')

    it.only('Multiply two numbers - Run only this test', function () {
        const math = new Math()

        assert.equal(math.multiply(2, 5), 10)
    })

    it.skip('Multiply two numbers - Skip test', function () {
        const math = new Math()

        assert.equal(math.multiply(2, 5), 10)
    })
})