import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ChatService } from './../../services/chat.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent implements OnInit {
  messages$: Observable<any[]>;
  users$: Observable<any[]>;

  constructor(private chat: ChatService) {
    this.messages$ = chat.messages$()
  }

  sendMessage(message: string) {
    this.chat.sendMessage(message);
  }

  logOut() {
  }

  ngOnInit() {
  }

}
