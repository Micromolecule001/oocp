import { AutoSort } from "./AutoSortClass";

export class ArraySort extends AutoSort {
    constructor(data) {
        this.data = super(data); // Call parent class constructor, assuming it takes data
    }

    sortArray() {
        return this.data[0].sort();
    }
}
