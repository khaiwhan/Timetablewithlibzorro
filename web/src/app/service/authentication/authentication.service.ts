import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ipServer } from '../../url/url';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }
  public login(data){
    return this.http.post(ipServer + 'login',data)
  }
}
