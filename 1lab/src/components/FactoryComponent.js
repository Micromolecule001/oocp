import React, { useState } from 'react';

class EncryptionFactory {
    create(type, string) {
        if (type === "EnEng") {
            return new EngUkrEncryption(string, 'en', 'eng');
        } else if (type === "EnUkr") {
            return new EngUkrEncryption(string, 'en', 'ukr');
        } else if (type === "DeEng") {
            return new EngUkrEncryption(string, 'de', 'eng');
        } else if (type === "DeUkr") {
            return new UkrEngEncryption(string, 'de', 'ukr');
        }

        return null;
    }
}

class UkrEngEncryption {
    constructor(string, method, lang) {
        this.string = string;
        this.method = method;
        this.lang = lang;
        this.englishAlphabet = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
        ];
        
        this.ukrainianAlphabet = [
            'а', 'б', 'в', 'г', 'ґ', 'д', 'е', 'є', 'ж', 'з', 'и', 'і', 'ї', 'й', 'к', 'л', 'м', 
            'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ю', 'я'
        ];
    }

    encryption() {
        let encryptedString = "";

        for (let i = 0; i < this.string.length; i++) {
            encryptedString = encryptedString + this.englishAlphabet[this.ukrainianAlphabet.indexOf(this.string[i]) + 1]
        }

        return encryptedString;
    }

    decryption() {
        let decryptedString = "";

        for (let j = 0; j < this.string.length; j++) {
            decryptedString = decryptedString + this.ukrainianAlphabet[this.englishAlphabet.indexOf(this.string[j]) - 1]
        }

        return decryptedString;
    }
}

class EngUkrEncryption {
    constructor(string, method, lang) {
        this.string = string;
        this.method = method;
        this.lang = lang;
        this.englishAlphabet = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
        ];
        
        this.ukrainianAlphabet = [
            'а', 'б', 'в', 'г', 'ґ', 'д', 'е', 'є', 'ж', 'з', 'и', 'і', 'ї', 'й', 'к', 'л', 'м', 
            'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ю', 'я'
        ];
    }

    encryption() {
        let encryptedString = "";

        for (let i = 0; i < this.string.length; i++) {
            encryptedString = encryptedString + this.ukrainianAlphabet[this.englishAlphabet.indexOf(this.string[i]) + 1]
        }

        return encryptedString;
    }

    decryption() {
        let decryptedString = "";

        for (let j = 0; j < this.string.length; j++) {
            decryptedString = decryptedString + this.englishAlphabet[this.ukrainianAlphabet.indexOf(this.string[j]) - 1]
        }

        return decryptedString;
    }
}

// Component

export const FactoryComponent = () => {
    const [encryptedText, setEncryptedText] = useState("");

    const handleEncryption = () => {
        const encryptionFactory = new EncryptionFactory();
        const encryptionInstance = encryptionFactory.create("EnEng", "Hello World");
        if (encryptionInstance) {
            const encryptedString = encryptionInstance.encryption();
            setEncryptedText(encryptedString);
        }
    };

    const handleDecryption = () => {
        return null;
    }



    
 
 
    return (
        <div>
            <div className='buttonWrapper'>
                <button onClick={handleEncryption}> Encryption </button>
                <button onClick={handleDecryption}> Decryption </button>
            </div>

            <div> {encryptedText} </div>
        </div>
    );
};

