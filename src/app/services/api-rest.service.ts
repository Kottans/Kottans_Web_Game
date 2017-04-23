import { Injectable } from '@angular/core';
import * as feathers from 'feathers/client';
import * as socketio from 'feathers-socketio/client';
import * as io from 'socket.io-client';
import * as localstorage from 'feathers-localstorage';
import * as hooks from 'feathers-hooks';
import * as rest from 'feathers-rest/client';
import * as authentication from 'feathers-authentication/client';

const superagent = require('superagent');

const HOST = 'http://localhost:3000'; // Your base server URL here
@Injectable()
export class ApiRestService {
  private _app: any;
  constructor() {
    this._app = feathers() // Initialize feathers
      .configure(rest(HOST).superagent(superagent)) // Fire up rest
      .configure(hooks()) // Configure feathers-hooks
  }

  get app() {
    return this._app;
  }
}


