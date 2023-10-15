import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public isSidebarShow = new BehaviorSubject<boolean>(true);

  constructor() { }
}
