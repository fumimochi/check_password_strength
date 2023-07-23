import { Component } from "@angular/core";

import { PasswordService } from "../../services/password.service";

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.scss']
})
export class PasswordComponent {
    public colorId = 0;
    
    constructor(private readonly _passwordService: PasswordService) {}

    public checkPassword(e) {
        this.colorId = this._passwordService.checkPasswordStrength(e.target.value);
    }
}