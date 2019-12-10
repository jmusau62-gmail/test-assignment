import { Component, OnInit } from '@angular/core';

import {User} from '../user'

@Component({
  selector: 'app-git-form',
  templateUrl: './git-form.component.html',
  styleUrls: ['./git-form.component.css']
})
export class GitFormComponent implements OnInit {
  user:User;
	username: string;
  searchGithubService:any;
  public showInput = true;
  public showData = false;

  constructor() {
    this.searchGithubService.getUserData(this.username);
    this.searchGithubService.getUserData(this.username);
      this.showInput=false;
      this.showData=true;
      this.showData= false;
   }

  ngOnInit() {
  }

}
