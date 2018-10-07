class Errors {
    constructor() {
        this.errors = {}
    }

    record(error) {
        let err = error.replace(/\d\s-\s/g, '')

        return this.errors = err
    }

    clear() {
        this.errors = {}
    }

    any() {
        return Object.keys(this.errors).length > 0
    }
}

export default Errors
