import { UkrEncryption } from './UkrEncryptionClass';
import { EngEncryption } from './EngEncryptionClass';

export class EncryptionFactory {
    create(string, type, lang) {
        if (type === "Encryption" && !lang) {
            return new EngEncryption(string, "Encryption", lang);
        } else if (type === "Encryption" && lang) {
            return new UkrEncryption(string, "Encryption", lang);
        } else if (type === "Decryption" && !lang) {
            return new EngEncryption(string, "Decryption", lang);
        } else if (type === "Decryption" && lang) {
            return new UkrEncryption(string, "Decryption", lang);
        }

        return null;
    }
}
