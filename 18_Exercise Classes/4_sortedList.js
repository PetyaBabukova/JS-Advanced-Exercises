class List {
    constructor() {
        this._result = [];
        this.size = 0;  // Public property for size
    }

    add(number) {
        this._result.push(number);
        this._result.sort((a, b) => a - b);
        this.size = this._result.length;  // Update size
    }

    remove(index) {
        if (index >= 0 && index < this._result.length) {
            this._result.splice(index, 1);
            this.size = this._result.length;  // Update size
        }
    }

    get(index) {
        if (index >= 0 && index < this._result.length) {
            return this._result[index];
        }
        // Optionally, you could throw an error or handle out-of-bounds access
    }
}
