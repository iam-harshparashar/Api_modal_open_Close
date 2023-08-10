import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private _url:string="https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) { }
  getdataposts():Observable<any>{
    return this.http.get(this._url)
   // console.log(this.getdataposts)
}


}