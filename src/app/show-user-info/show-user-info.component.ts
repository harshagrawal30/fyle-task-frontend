import { Component } from '@angular/core';
import { UserdatafetchService } from '../userdatafetch.service';

@Component({
  selector: 'app-show-user-info',
  templateUrl: './show-user-info.component.html',
  styleUrls: ['./show-user-info.component.css']
})
export class ShowUserInfoComponent {
  
  constructor(public dataservice:UserdatafetchService){}
}
