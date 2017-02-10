import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { User } from './user';

@Injectable()
export class UserService 
{
private useresUrl = 'https://rest-ws-deploy-heroku.herokuapp.com/user';  // URL to web API
constructor (private http: Http) {}

getUsers () 
{
return this.http.get(this.useresUrl).map(res => <User[]> res.json()).catch(this.handleError);
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







