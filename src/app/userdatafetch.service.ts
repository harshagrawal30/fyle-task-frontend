import { Injectable } from '@angular/core';
import { UserInfo } from '../app/userinfo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, of } from 'rxjs';
import { mockData } from './mock-user';
import { PaginationService } from './pagination.service';
@Injectable({
  providedIn: 'root'
})
export class UserdatafetchService {

  userDetail: UserInfo[] = []
  loading:boolean = false;
  totalLength: number = this.userDetail[0]?.user_repositories.length
  reposPerPage: number = 6
  rem = this.totalLength % this.reposPerPage
  noOfPages = this.rem ? this.totalLength / this.reposPerPage + 1 : this.totalLength / this.reposPerPage

  constructor(private http: HttpClient) { }
  fetchUserDetails(user: string): void {
    this.loading = true;
      this.http.get<UserInfo[]>(`https://fyletask16012023.pythonanywhere.com/user/api/user/${user}`).subscribe(data => {
        console.log(data,'data')
        this.loading= false;
      this.userDetail = data;
      this.totalLength = data[0]?.user_repositories.length
      this.rem = data[0]?.user_repositories.length % this.reposPerPage
      this.noOfPages = this.rem ? data[0].user_repositories.length / this.reposPerPage + 1 : data[0].user_repositories.length / this.reposPerPage
    },error=>{this.loading=false; this.userDetail=[{'status':'error','user_repositories':[],'id':null,'name':null,'avatar':null,'bio':null,'location':null,'username':null,'twitter':null}]}
    )

  }

  getUserDetails(): Observable<UserInfo[]> {
    console.log('working')
    console.log(this.userDetail)
    return of(this.userDetail)
  }

  getPaginationDetails(): any {
    return this.totalLength
  }
  resetDetails(): void {
    this.userDetail = []
    this.totalLength = 0
    this.rem = 0
    this.noOfPages = 0
  }
}
