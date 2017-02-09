import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { HomeComponent }  from '../home/home.component';
import { AboutComponent }  from '../about/about.component';
import { WebserviceComponent }  from '../webservice/webservice.component';
import { MainComponent }  from './main.component';




@NgModule({
  imports:      [ BrowserModule 
 
  ,

 RouterModule.forRoot([
      
	  {
        path: 'about',
        component: AboutComponent
      },
	   {
        path: 'home',
        component: HomeComponent
      }
	  ,
	   {
        path: 'webservice',
        component: WebserviceComponent
      }
    ])	
  
  
  ],
  declarations: [ HomeComponent,AboutComponent,MainComponent,WebserviceComponent ],
  bootstrap:    [ MainComponent ]
})
export class MainModule { }
