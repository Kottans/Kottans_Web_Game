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
  private _app: any;
  // public signUpService: any;
  constructor() {
    this._app = feathers() // Initialize feathers
      .configure(rest(HOST).superagent(superagent)) // Fire up rest
      .configure(hooks())
      .configure(authentication({ storage: window.localStorage, path: '/auth/local' })) // Configure feathers-hooks
  }


  get app(): any {
    return this._app;
  }

  // expose services
  public service(name: string) {
    return this._app.service(name);
  }

  // expose authentication
  public authenticate(credentials?): Promise<any> {
    return this._app.authenticate(credentials);
  }

  // expose logout
  public logout() {
    return this._app.logout();
  }
}
