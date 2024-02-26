import React, { useState } from 'react';

export const InputsComponent = () => {
    const [isUkrToEng, setIsUkrToEng] = useState(false);
    const [textValue, setTextValue] = useState('');

    const handleToggle = () => {
        setIsUkrToEng(!isUkrToEng);
    };

    const handleChange = (event) => {
        setTextValue(event.target.value);
    };

    return (
        <div>
            <button className='switch' onClick={handleToggle}> Click to rotate language </button>

            <div className="inputWrapper">
                <form>
                    <textarea
                        type="text"
                        id="from"
                        placeholder={isUkrToEng ? 'Ukrainian' : 'English'}
                        value={textValue}
                        onChange={handleChange}
                    ></textarea>
                </form>
            </div>

            <div className="inputWrapper">
                <form>
                    <textarea
                        type="text"
                        id="to"
                        placeholder={isUkrToEng ? 'English' : 'Ukrainian'}
                        readOnly
                    ></textarea>
                </form>
            </div>
        </div>
    );
};
