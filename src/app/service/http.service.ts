import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  getUsers(){
    return this.http.get('http://localhost:3000/employee')
  }
  delete(id:any){
    return this.http.delete(`http://localhost:3000/employee/${id}`)
  }
}
