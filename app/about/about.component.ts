import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: 'app/about/about.html',
  styleUrls: [ 'style/style.css' ]
})
export class AboutComponent  { 

 clicked() {
	 alert("I Clicked...");
  }

}
