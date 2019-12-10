import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Repo } from '../repo';

@Injectable({
  providedIn: 'root'
})
export class GithubRequestService {
  user:User;
  repo:Repo;
  repoData= [];
  newUserData; any = [];
  showInput:boolean;
  shoData:boolean;

  constructor(private http: HttpClient) { }
}
