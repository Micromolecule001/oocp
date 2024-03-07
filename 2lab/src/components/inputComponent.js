import React, { useState } from 'react';
import { AutoSort } from './AutoSortClass';

export const InputsComponent = () => { 
    const [inputData, setInputData] = useState('');
    const [sortedResult, setSortedResult] = useState('');

    const handleInputChange = (value) => {
        console.log('value: ', value)
        setInputData(inputData + value);
        console.log('setValue: ', value)
    } 

    const getData = () => {
        console.log('get data: ', inputData)
        if( inputData[0] === '[' && inputData[inputData.length - 1] === ']' ) {
            const unsortedData = new AutoSort('Array', inputData);
            console.log('array: ', unsortedData);
            setSortedResult(unsortedData.sort());
        } else if( typeof(inputData) === "string" ) {
            const unsortedData = new AutoSort('string', inputData);
            console.log('string: ', unsortedData);
            setSortedResult(unsortedData.sort());
        } else if( typeof(inputData) === "number" ) {
            const unsortedData = new AutoSort('number', inputData);
            console.log('number: ', unsortedData);
            setSortedResult(unsortedData.sort());
        }
    }

    return (
        <div>
            <div className="inputWrapper">
                <form>
                    <textarea
                        type="text"
                        id="from"
                        placeholder={"Insert your data here"}
                        onChange={handleInputChange}
                    ></textarea>
                </form>
            </div>

            <div className="inputWrapper">
                <form>
                    <textarea
                        type="text"
                        id="to"
                        placeholder={inputData.toString()}
                        value={sortedResult}
                        readOnly
                    ></textarea>
                </form>
            </div>

            <div className='buttonWrapper'>
                <button onClick={getData}> Sort </button>
            </div>
        </div>
    );
};
