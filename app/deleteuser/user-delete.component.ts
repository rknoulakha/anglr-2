import { Component } from '@angular/core';
import { User }              from '../webservice/User';
import { UserService }       from '../webservice/user.service';

@Component({
 
  selector: 'my-app',
  templateUrl: 'app/deleteuser/user-delete.component.html',  
  providers: [ UserService ],
  styles: ['.error {color:red;}']
})
export class DeleteUserComponent  {
  errorMessage : string;
  success : string;
  users: User[];

  constructor (private userService: UserService) {}
  
  clearUser(id : number) 
  {
	alert('Clear is not working now.');
  }

 deleteUser(id:number) 
{
	
 alert('Delete is not working now.');
 }


}


