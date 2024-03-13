import React, { useState } from 'react';
import { EncryptionFactory } from './FactoryClass';

export const InputsComponent = () => { 
    const [isUkrToEng, setIsUkrToEng] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [encryptedText, setEncryptedText] = useState("");

    let encryption = encryptedText;

    const handleEncryption = () => {
        const factory = new EncryptionFactory();
        const factoryItem = factory.create(inputValue.target.value, "Encryption", isUkrToEng);

        console.log("eninputValue: ", inputValue.target.value); 

        setEncryptedText(factoryItem.encryption());
    };

    const handleDecryption = () => {
        const factory = new EncryptionFactory();
        const factoryItem = factory.create(inputValue.target.value, "Decryption", isUkrToEng);
        
        console.log("deinputValue: ", inputValue.target.value); 

        setEncryptedText(factoryItem.decryption());
    }

    const changeLanguage = () => {
        setIsUkrToEng(!isUkrToEng);
    };

    const handleInputChange = (value) => {
        setInputValue(value);
    }

    return (
        <div>
            <button className='switch' onClick={changeLanguage}> Click to rotate language </button>

            <div className="inputWrapper">
                <form>
                    <textarea
                        type="text"
                        id="from"
                        placeholder={isUkrToEng ? 'Ukrainian' : 'English'}
                        onChange={handleInputChange}
                    ></textarea>
                </form>
            </div>

            <div className="inputWrapper">
                <form>
                    <textarea
                        type="text"
                        id="to"
                        placeholder={isUkrToEng ? 'English' : 'Ukrainian'}
                        value={encryption}
                        readOnly
                    ></textarea>
                </form>
            </div>

            <div className='buttonWrapper'>
                <button onClick={handleEncryption}> Encryption </button>
                <button onClick={handleDecryption}> Decryption </button>
            </div>
        </div>
    );
};
