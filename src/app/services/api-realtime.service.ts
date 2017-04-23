import { Injectable } from '@angular/core';
import * as feathers from 'feathers/client';
import * as socketio from 'feathers-socketio/client';
import * as io from 'socket.io-client';
import * as localstorage from 'feathers-localstorage';
import * as hooks from 'feathers-hooks';
import * as rest from 'feathers-rest/client';
import * as authentication from 'feathers-authentication-client';

const superagent = require('superagent');



const HOST = 'http://localhost:3000'; // Your base server URL here
@Injectable()
export class ApiRealtimeService {
    private _feathers: any;
    private _socket: any;
    constructor() {
        this._socket = io('http://localhost:3000');

        this._feathers = feathers();
        this._feathers.configure(hooks());
        this._feathers.configure(socketio(this._socket));
        this._feathers.configure(authentication({
            storage: window.localStorage
        }));
    }


    get app(): any {
        return this._feathers;
    }

    public service(name: string) {
        return this._feathers.service(name);
    }

    public authenticate(credentials?): Promise<any> {
        return this._feathers.authenticate(credentials)
    }

    public logout() {
        return this._feathers.logout();
    }
}
