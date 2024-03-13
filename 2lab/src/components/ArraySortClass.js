export class ArraySort {
    constructor(data) {
        this.data = data;
    }

    sortArray() {
        let array = [...this.data];

        return '[' + array.sort() + ']';
    }
}
