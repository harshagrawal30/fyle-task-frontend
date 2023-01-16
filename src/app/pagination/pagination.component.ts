import { Component } from '@angular/core';
import { UserdatafetchService } from '../userdatafetch.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  constructor(public getvalues:UserdatafetchService){}
  // getValues():void{

  // }
}
