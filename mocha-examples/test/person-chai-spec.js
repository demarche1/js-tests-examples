const { expect } = require('chai')
const Person = require('../src/Person')

// Chai assert API: https://www.chaijs.com/api/assert/

describe('Person class', function () {
    it('Should have age property', function () {
        const ale = new Person('Alessandro', 'Silva', 26, 'm')

        expect(ale).to.have.property('age')
    })

    it('Name property', function () {
        const ale = new Person('Alessandro', 'Silva', 26, 'm')

        expect(ale.name).to.equal('Alessandro')
    })

    it.only('should retrieve full name', function () {
        const ale = new Person('Alessandro', 'Silva', 26, 'm')

        expect(ale.getFullName()).to.equal('Alessandro Silva')
    });

})