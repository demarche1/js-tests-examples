const assert = require('assert')
const Math = require('../src/Math')
const { expect } = require('chai')
const sinon = require('sinon')

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

    it('Multiply two numbers - Run only this test', function () {
        const math = new Math()

        assert.equal(math.multiply(2, 5), 10)
    })

    it.skip('Multiply two numbers - Skip test', function () {
        const math = new Math()

        assert.equal(math.multiply(2, 5), 10)
    })

    it('Should calls res with sum and index value', function () {
        const req = {}
        const res = {
            load: sinon.spy()
        }

        const math = new Math()

        math.printSum(req, res, 5, 5)

        expect(res.load.args[0][0]).to.equal('index')
    })

    it('printSum should be called once', function () {
        const req = {}
        const res = {
            load: sinon.spy()
        }

        const math = new Math()

        math.printSum(req, res, 5, 5)

        expect(res.load.calledOnce).to.be.ok
    })

    it.only('printSum should be result 10', function () {
        const req = {}
        const res = {
            load: () => {
                console.log('Called')
            }
        }

        sinon.spy(res, 'load')

        const math = new Math()

        math.printSum(req, res, 5, 5)

        expect(res.load.args[0][1]).to.be.equal(10)
    })
})