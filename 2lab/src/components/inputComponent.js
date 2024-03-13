import React, { useState } from 'react';
import { AutoSort } from './AutoSortClass';

export const InputsComponent = () => { 
    const [inputData, setInputData] = useState('');
    const [sortedResult, setSortedResult] = useState('');

    const handleInputChange = (event) => {
        setInputData(event.target.value);
    } 

    const getData = (event) => {
        console.log('get data: ', inputData, 'event.triger.id: ', event.target.id)

        let buttonId = event.target.id;

        if( buttonId === 'array' ) {
            const unsortedData = new AutoSort('array', inputData);

            console.log('array: ', unsortedData);

            setSortedResult(unsortedData.sortStrategy());
        } else if( buttonId === 'string'  ) {
            const unsortedData = new AutoSort('string', inputData);

            console.log('string: ', unsortedData);

            setSortedResult(unsortedData.sortStrategy());
        } else if( buttonId === 'number'  ) {
            const unsortedData = new AutoSort('number', inputData);

            console.log('number: ', unsortedData);

            setSortedResult(unsortedData.sortStrategy());
        } else {
            console.log( 'else...');
            return typeof(inputData);
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
                        placeholder={'There will be output sorted data'}
                        value={sortedResult}
                        readOnly
                    ></textarea>
                </form>
            </div>

            <h2> Choose your data type </h2>

            <div className='buttonWrapper'>
                <button id='array' onClick={getData}> Array </button>
            
                <button id='string' onClick={getData}> String </button>
            
                <button id='number' onClick={getData}> Number </button>
            </div>
        </div>
    );
};
