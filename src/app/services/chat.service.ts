import { Injectable } from '@angular/core';
import { ApiRealtimeService } from './../services/api-realtime.service'

@Injectable()
export class ChatService {

  constructor(private feathers: ApiRealtimeService) {
  }


  messages$() {
    return this.feathers
      .service('chat')
      .find();
  }

  sendMessage(message: string) {
    if (message === '') {
      return;
    }

    this.feathers
      .service('chat')
      .create({
        text: message
      });
  }


}
