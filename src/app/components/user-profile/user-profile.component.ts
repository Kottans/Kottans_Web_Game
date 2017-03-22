import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userСhecked = false;
  data = {
    avatar: this.getUserAvatartUrl(),
    profileBackGround: 'https://source.unsplash.com/random/800x600',
    userName: 'RedHulk',
    allGames: 57,
    winsGames: 41,
    lastGame: '17.05.2016',
    historyGames: this.getUserHistoryGame()
  }

  constructor() { }

  ngOnInit() {
  }

  getUserAvatartUrl() {
    return 'http://images.contactmusic.com/newsimages/david_beckham_1133321.jpg';
  }
  getUserHistoryGame() {
    return [
      {start: new Date("October 13, 2016 19:13:00"),
       end: new Date("October 13, 2016 22:19:00"),
       players: ["Jim", "Kate", 'Myke', 'RedHulk'],
       winer: 'RedHulk'},
      {start: new Date("October 13, 2016 11:13:00"),
       end: new Date("October 13, 2016 11:13:00"),
       players: ["Jim", "Kate", 'Myke', 'RedHulk'],
       winer: 'RedHulk'},
      {start: new Date("October 13, 2016 11:13:00"),
       end: new Date("October 13, 2016 11:13:00"),
       players: ["Jim", "Kate", 'Myke', 'RedHulk'],
       winer: 'Kate'},
      {start: new Date("October 13, 2016 11:13:00"),
       end: new Date("October 13, 2016 11:13:00"),
       players: ["Jim", "Kate", 'Myke', 'RedHulk'],
       winer: 'RedHulk'},
      {start: new Date("April 4, 2016 10:13:00"),
       end: new Date("April 4, 2016 15:17:00"),
       players: ["Jim", "Kate", 'Myke', 'RedHulk'],
       winer: 'Myke'},
      {start: new Date("May 19, 2016 19:13:00"),
       end: new Date("May 20, 2016 04:03:00"),
       players: ["Jim", "Max", 'Myke', 'RedHulk'],
       winer: 'Jim'},
    ];
  }


}
