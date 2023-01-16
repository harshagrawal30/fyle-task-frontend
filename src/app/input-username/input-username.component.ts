import { Component ,Input} from '@angular/core';
import { enteredUsername } from '../mock-user';
import { UserdatafetchService } from '../userdatafetch.service';
import { EnteredUsername } from '../userinfo';
@Component({
  selector: 'app-input-username',
  templateUrl: './input-username.component.html',
  styleUrls: ['./input-username.component.css']
})
export class InputUsernameComponent {
  constructor(private userdatafetch:UserdatafetchService){}
  
  @Input() username?:EnteredUsername;
  func():any{
    this.userdatafetch.resetDetails();
    if(this.username?.userName)this.userdatafetch.fetchUserDetails(this.username.userName)
  }
}
