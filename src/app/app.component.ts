import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userList = [];

  onSubmitUser(user: object) {
    this.userList = [...this.userList, user];
    console.log('parent list', this.userList);
  }
}
