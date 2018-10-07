import Errors from './Errors.js'

class Form {
    constructor(data) {
        this.originalData = data

        for (const field in data) {
            this[field] = data[field]
        }

        this.errors = new Errors()
        this.submitted = false
    }

    reset() {
        for (const field in originalData) {
            this[field] = ''
        }
    }
}

export default Form
