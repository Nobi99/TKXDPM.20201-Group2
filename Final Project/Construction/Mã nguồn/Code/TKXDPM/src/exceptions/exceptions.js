class interbankException {
    constructor(message) {
        this.message = message;
        this.name = 'Interbank exception';
    }
}


class localServerException {
    constructor(message) {
        this.message = message;
        this.name = 'Local server exception';
    }
}
export { localServerException, interbankException };
