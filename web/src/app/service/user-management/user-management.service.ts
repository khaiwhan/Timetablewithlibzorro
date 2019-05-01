import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ipServer } from '../../url/url';
@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get(ipServer + 'getdatauser')
  }
}
