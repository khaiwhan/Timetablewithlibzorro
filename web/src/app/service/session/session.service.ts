import { Injectable } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private session:SessionStorageService) { }
  public setActiveUser(data){
    this.session.store('ACTIVE_USER',data)
  }
  public getActiveUser(){
    return this.session.retrieve('ACTIVE_USER')
  }
  public clearActiveUser(){
    this.session.clear('ACTIVE_USER')
  }
}
