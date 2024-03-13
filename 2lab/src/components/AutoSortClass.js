import { ArraySort } from "./ArraySortClass";
import { StringSort } from "./StringSortClass";
import { NumberSort } from "./NumberSortClass";

export class AutoSort {
    constructor(strategyType, data) {
        this.strategyType = strategyType;
        this.data = data;
    }

    sortStrategy() {
        console.log('sortStrat');

        let unsortedData = this.data;
        let method = this.strategyType;
        
        console.log('UnsortedData before last phase: ', unsortedData)

        if( method === 'array' ) {
            
            let stratClass = new ArraySort(unsortedData)
            console.log('Array sorting...');
            return stratClass.sortArray();

        } else if( method === 'string'  ) {

            let stratClass = new StringSort(unsortedData)
            console.log('String sorting...');
            return stratClass.sortString();

        } else if( method === 'number'  ) {

            let stratClass = new NumberSort(unsortedData)
            console.log('Number sorting...');
            return stratClass.sortNumber();

        } else {
            console.log( 'else...');
            return typeof(inputData);
        }
    }
}
