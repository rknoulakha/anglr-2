import { Component } from '@angular/core';
import { User }              from '../webservice/User';
import { UserService }       from '../webservice/user.service';

@Component({
 
  selector: 'my-app',
  templateUrl: 'app/saveuser/user-save.component.html',  
  providers: [ UserService ],
  styles: ['.error {color:red;}']
})
export class SaveUserComponent  {
  errorMessage : string;
  success : string;
  users: User[];

  constructor (private userService: UserService) {}
  
 saveUser(name : string, profession : string, country : string, state : string, city : string, pincode : number) 
{
 this.userService.saveUser(name,profession,country,state,city ,pincode).subscribe(success  => 'Success',error =>  this.errorMessage = <any>error);
 alert('Data Save successfully.');
 }
 

  clearUser(name : string,profession : string,country : string,state : string,city : string,pincode : number) 
  {
	alert('Clear is not working now.');
  }


}


