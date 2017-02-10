import { Component, OnInit } from '@angular/core';
import { User }              from './user';
import { UserService }       from './user.service';

@Component({
 
  selector: 'my-app',
  templateUrl: 'app/users/user-list.component.html',  
  providers: [ UserService ],
  styles: ['.error {color:red;}']
})
export class UserListComponent implements OnInit {
  errorMessage: string;
  users: User[];

  constructor (private userService: UserService) {}

  ngOnInit() { 
  
  this.getUsers(); }

  getUsers() {
    this.userService.getUsers()
                     .subscribe(
                       users => this.users = users,
                       error =>  this.errorMessage = <any>error);
  }

  
}


