import { NgModule }      			from '@angular/core';
import { BrowserModule } 			from '@angular/platform-browser';
import { RouterModule }   			from '@angular/router';
import { FormsModule }   			from '@angular/forms';
import { HttpModule, JsonpModule } 	from '@angular/http';

import { MainComponent }  			from './main.component';
import { HomeComponent }  			from '../home/home.component';
import { AboutComponent }  			from '../about/about.component';
import { UserListComponent }        from '../users/user-list.component';




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
      }
    ])],
declarations: [ HomeComponent,AboutComponent,MainComponent,UserListComponent ],
bootstrap:    [ MainComponent ]
})
export class MainModule { }
