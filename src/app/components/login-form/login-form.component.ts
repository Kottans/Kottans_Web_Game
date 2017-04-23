import { Component, OnInit } from '@angular/core';
import { ApiRealtimeService } from '../../services/api-realtime.service';

// import { AuthService } from '../../services/auth.service';
import {
    AbstractControl, FormArray, FormBuilder,
    FormControl, FormGroup, Validators
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
    private _authService;
    private _feathers;
    loginData: FormGroup;

    constructor(
        // private authService: AuthService, 
        private feathers: ApiRealtimeService,
        public router: Router) {
        // this._authService = authService;
        this._feathers = feathers;

        this.loginData = new FormGroup({
            email: new FormControl(),
            password: new FormControl()
        });
    }



    login(email: string, password: string) {
        if (!email || !password) {
            return;
        }

        return this.feathers.authenticate({
            strategy: 'local',
            email,
            password
        })
            .then((result) => {
                console.log(result)
                this.router.navigate(['/']);
            }, error => console.log(error))
            .catch(err => {
                console.error(err);
            });
    }

    signup(email: string, password: string) {
        this.feathers.service('users')
            .create({ email: this.loginData.value.email, password: this.loginData.value.password })
            .then(() => console.log('User created.'))
            .catch(err => console.log(err))
            ;
    }
    cancel() {
        this.closePopup();
    }
    closePopup() {
        this.router.navigate([{ outlets: { popup: null } }]);
    }

    ngOnInit() {
    }
}
