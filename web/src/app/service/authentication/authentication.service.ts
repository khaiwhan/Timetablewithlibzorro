import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ipServer } from '../../url/url';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }
  login(data){
    return this.http.post(ipServer + 'login',data)
  }
  section(data){
    return this.http.get(ipServer + 'section/' + data)
  }
  getFaculty(){
    return this.http.get(ipServer + 'getfaculty')
  }
  getDepartment(data){
    return this.http.get(ipServer + 'getdepartment/' + data)
  }
}
