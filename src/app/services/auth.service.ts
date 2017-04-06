import { Injectable } from '@angular/core';
import { ApiRealtimeService } from './api-realtime.service';



@Injectable()
export class AuthService {
  private _socket;

  constructor(private _socketService: ApiRealtimeService) { 
    this._socket = _socketService;

  }

  login(mail: string, password: string) {
    return this._socket.app.authenticate()

  }
  logout() {

  }

}
