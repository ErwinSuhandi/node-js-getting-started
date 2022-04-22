import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { createCipheriv, randomBytes, scrypt } from 'crypto';
import { createDecipheriv } from 'crypto';
import { promisify } from 'util';


@Injectable()
export class AuthService {
    encodePassword(rawPassword : string){
        const SALT = bcrypt.genSaltSync();
        return bcrypt.hashSync(rawPassword, SALT);
    }

    comparePasswords(rawPassword : string, hash : string){
        return bcrypt.compareSync(rawPassword, hash);
    }

    async encodePasswordCrypto(password : string): Promise<Buffer>{
        const iv = randomBytes(16);
        //const password = 'Password used to generate key';
    
        // The key length is dependent on the algorithm.
        // In this case for aes256, it is 32 bytes.
        const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
        const cipher = createCipheriv('aes-256-ctr', key, iv);
    
        const textToEncrypt = 'Nest';
        const encryptedText = Buffer.concat([
        cipher.update(textToEncrypt),
        cipher.final(),
        ]);
        
        return encryptedText;
    }

     async decodePasswordCrypto(encryptedText : Buffer){
        const iv = randomBytes(16);
        const key = (await promisify(scrypt)(encryptedText, 'salt', 32)) as Buffer;
      
        const decipher = createDecipheriv('aes-256-ctr', key, iv);
        const decryptedText = Buffer.concat([
        decipher.update(encryptedText),
        decipher.final(),
        ]);
    }
    


}
