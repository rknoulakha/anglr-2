import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { User } from './User';

@Injectable()
export class UserService 
{
private usersUrl = 'https://rest-ws-deploy-heroku.herokuapp.com/user';  // URL to web API
constructor (private http: Http) {}

getUsers () 
{
return this.http.get(this.usersUrl).map(res => <User[]> res.json()).catch(this.handleError);
}

getSingleUser (id : number) 
{
	
var url=this.usersUrl+'/'+id;
return this.http.get(url).map(res => <User[]> res.json()).catch(this.handleError);
}

saveUser(name : string, profession : string, country : string, state : string, city : string, pincode : number)
{
var url=this.usersUrl+'/insert';	
let headers = new Headers({ 'Content-Type': 'application/json' });
let options = new RequestOptions({ headers: headers });
var user = 
{
"name" : name,
"profession" : profession,
"address" : 
{
"country" : country,
"state" : state,
"city" : city,
"pincode" : pincode
}
};
var userString = JSON.stringify(user, null, '');
return this.http.post(url,userString, options).map(this.extractData).catch(this.handleError);
}

private extractData(res: Response) 
{
let body = res.json();
return body.data || { };
}

  
private handleError (error: Response | any) 
{
let errMsg: string;
if (error instanceof Response) 
{
const body = error.json() || '';
const err = body.error || JSON.stringify(body);
errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
} 
else
{
errMsg = error.message ? error.message : error.toString();
}
console.error(errMsg);
return Observable.throw(errMsg);
}



}







