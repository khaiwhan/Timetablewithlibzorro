import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ipServer } from '../../url/url';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }
  getuser(data) {
    return this.http.get(ipServer + 'dashboardgetuser/' + data)
  }
  getsection(data){
    return this.http.get(ipServer + 'dashboardgetsection/' + data)
  }
}
