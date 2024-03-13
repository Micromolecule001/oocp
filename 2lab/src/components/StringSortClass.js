export class StringSort {
    constructor(data) {
        this.data = data;
    }

    sortString() {
        let unsortedString = this.data.split("");
        let priority = "abcdefghijklmnopqrstuvwxyz".split("");
    
        for (let i = 0; i < unsortedString.length - 1; i++) {
            for (let j = 0; j < unsortedString.length - i - 1; j++) {
                if (priority.indexOf(unsortedString[j]) > priority.indexOf(unsortedString[j + 1])) {
                    let temp = unsortedString[j];
                    unsortedString[j] = unsortedString[j + 1];
                    unsortedString[j + 1] = temp;
                }
            }
        }
    
        let result = unsortedString.join("");
        console.log('result: ', result);
        return result;
    }    
}
