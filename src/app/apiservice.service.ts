import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  // connect frontend to backend

apiUrl = "http://localhost:3000/details";

  // get all data

getAllData():Observable<any>
{
  return this._http.get(`${this.apiUrl}`);
}


//delete data

deleteData(id:any):Observable<any>
{
    let ids = id;
    return this._http.delete(`${this.apiUrl}/${ids}`)
}

//update data

updateData(data:any,id:any):Observable<any>
{
  let ids = id;
  return this._http.put(`${this.apiUrl}/${ids}`,data);
}


}
