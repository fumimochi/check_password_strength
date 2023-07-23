import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PasswordService {
    private lettersRegex = /[a-zA-Z]/;
    private symbolsRegex = /[^a-zA-Z\d]/;
    private digitsRegex = /\d/;
    private passwordDifficulty = 0;

    public checkPasswordStrength(password: string): number {
        this.passwordDifficulty = 0;

        if(password.length > 0 && password.length < 8) return -1;

        if (this.lettersRegex.test(password)) {
            this.passwordDifficulty++;
        }
    
        if (this.symbolsRegex.test(password)) {
        this.passwordDifficulty++;
        }
    
        if (this.digitsRegex.test(password)) {
        this.passwordDifficulty++;
        }
        
        return this.passwordDifficulty;
    }
}