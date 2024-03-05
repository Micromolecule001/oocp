export class AutoSort {
    constructor(strategyType, data) {
        this.strategyType = strategyType;
        this.data = data;
    }

    sort() {
        if( this.strategyType === 'Array' ) {
            return arraySort(this.data);
        } else if ( this.strategyType === 'String') {
            return stringSort(this.data);
        } else {
            console.log( 'else' )
        }
    }
}

function arraySort(arr) {
    return arr.sort();
}

function stringSort(str) {
    return "sortedString";
}