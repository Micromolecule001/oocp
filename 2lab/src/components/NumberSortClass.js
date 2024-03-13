export class NumberSort {
    constructor(data) {
        this.data = data;
    }

    sortNumber() {
        let unsortedNumber = this.data.split("");
        let priority = "0123456789".split("");
    
        for (let i = 0; i < unsortedNumber.length - 1; i++) {
            for (let j = 0; j < unsortedNumber.length - i - 1; j++) {
                if (priority.indexOf(unsortedNumber[j]) > priority.indexOf(unsortedNumber[j + 1])) {
                    let temp = unsortedNumber[j];
                    unsortedNumber[j] = unsortedNumber[j + 1];
                    unsortedNumber[j + 1] = temp;
                }
            }
        }
    
        let result = unsortedNumber.join("");
        console.log('result: ', result);
        return result;
    }
}
