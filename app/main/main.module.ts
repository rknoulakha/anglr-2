import { NgModule }      			from '@angular/core';
import { BrowserModule } 			from '@angular/platform-browser';
import { RouterModule }   			from '@angular/router';
import { FormsModule }   			from '@angular/forms';
import { HttpModule, JsonpModule } 	from '@angular/http';

import { MainComponent }  			from './main.component';
import { HomeComponent }  			from '../home/home.component';
import { AboutComponent }  			from '../about/about.component';
import { UserListComponent }        from '../users/user-list.component';
import { SaveUserComponent }        from '../saveuser/user-save.component';
import { UpdateUserComponent }      from '../updateuser/user-update.component';
import { DeleteUserComponent }      from '../deleteuser/user-delete.component';




@NgModule({
imports:      [ BrowserModule,FormsModule,HttpModule,JsonpModule,RouterModule.forRoot([      
	  {
        path: 'about',
        component: AboutComponent
      },
	  {
        path: 'home',
        component: HomeComponent
      },
	  {
        path: 'users',
        component: UserListComponent
      },
	  {
        path: 'saveuser',
        component: SaveUserComponent
      },
	  {
        path: 'updateuser',
        component: UpdateUserComponent
      },
	  {
        path: 'deleteuser',
        component: DeleteUserComponent
      }
    ])],
declarations: [ HomeComponent,AboutComponent,MainComponent,UserListComponent,SaveUserComponent,UpdateUserComponent,DeleteUserComponent ],
bootstrap:    [ MainComponent ]
})
export class MainModule { }
