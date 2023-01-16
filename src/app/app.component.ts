import { Component } from '@angular/core';
import { enteredUsername } from './mock-user';
import { UserdatafetchService } from './userdatafetch.service';
import { EnteredUsername } from './userinfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dataservice:UserdatafetchService){}
  username:EnteredUsername={userName:''} ;
  title = 'fyle-task-frontend';
}
