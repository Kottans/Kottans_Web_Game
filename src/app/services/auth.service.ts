import { Injectable } from '@angular/core';
import { ApiRealtimeService } from './api-realtime.service';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {

    constructor(private feathers: ApiRealtimeService, private router: Router) { }

    public logIn(email?, password?): Promise<any> {
        return this.feathers.authenticate({
            strategy: 'local',
            email,
            password
        });
    }

    public logOut() {
        this.feathers.logout();
        this.router.navigate(['/']);
    };
}
