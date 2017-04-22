import { Injectable } from '@angular/core';
import { ApiRealtimeService } from './api-realtime.service';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {
    // private _socket;

    constructor(private _socketService: ApiRealtimeService,
        private router: Router) {
    }

    public logIn(credentials?): Promise<any> {
        return this._socketService.authenticate(credentials);
    }

    public logOut() {
        this._socketService.logout();
        this.router.navigate(['/']);


    }
}
