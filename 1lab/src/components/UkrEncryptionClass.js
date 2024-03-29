import React from 'react';

export class UkrEncryption extends React.Component {
    constructor(string, method, lang) {
        super(string, method, lang);
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
        console.log('this.ukrAplphabet: ', this.ukrainianAlphabet)
    }

    encryption() {
        let encryptedString = "";
        console.log('encfunc: ', this.ukrainianAlphabet, this.englishAlphabet)
        for (let i = 0; i < this.string.length; i++) {
            encryptedString += + this.englishAlphabet[this.ukrainianAlphabet.indexOf(this.string[i]) + 1]
        }

        return encryptedString;
    }

    decryption() {
        let decryptedString = "";
        console.log('decfunc: ', this.ukrainianAlphabet, this.englishAlphabet)
        for (let j = 0; j < this.string.length; j++) {
            decryptedString += this.englishAlphabet[this.ukrainianAlphabet.indexOf(this.string[j]) - 1]
        }

        return decryptedString;
    }
}
