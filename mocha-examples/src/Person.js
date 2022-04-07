class Person {
    constructor(name, lastName, age, sex) {
        this.name = name
        this.age = age
        this.sex = sex
        this.lastName = lastName
    }

    getFullName () {
        return `${this.name} ${this.lastName}`
    }
}

module.exports = Person