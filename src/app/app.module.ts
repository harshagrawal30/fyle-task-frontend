import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { InputUsernameComponent } from './input-username/input-username.component';
import { ShowUserInfoComponent } from './show-user-info/show-user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { RepoBoxComponent } from './repo-box/repo-box.component';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
  declarations: [
    AppComponent,
    InputUsernameComponent,
    ShowUserInfoComponent,
    RepoBoxComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
