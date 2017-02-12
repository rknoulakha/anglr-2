import { Component } from '@angular/core';
import { User }              from '../webservice/User';
import { UserService }       from '../webservice/user.service';

@Component({
 
  selector: 'my-app',
  templateUrl: 'app/updateuser/user-update.component.html',  
  providers: [ UserService ],
  styles: ['.error {color:red;}']
})
export class UpdateUserComponent  {
  errorMessage : string;
  success : string;
  users: User[];

  constructor (private userService: UserService) {}
  
  clearSearchUser(id : number) 
  {
	alert('Clear is not working now.');
  }
  
 clearUser(name : string,profession : string,country : string,state : string,city : string,pincode : number) 
  {
	alert('Clear is not working now.');
  }

 getSingleUser(id:number) 
{
	
  this.userService.getSingleUser(id).subscribe(users => this.users = users,error =>  this.errorMessage = <any>error);
 }

}


