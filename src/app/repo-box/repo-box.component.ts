import { Component, Input } from '@angular/core';
import { ReposInfo } from '../userinfo';

@Component({
  selector: 'app-repo-box',
  templateUrl: './repo-box.component.html',
  styleUrls: ['./repo-box.component.css']
})
export class RepoBoxComponent {
@Input() repository?:ReposInfo
}
