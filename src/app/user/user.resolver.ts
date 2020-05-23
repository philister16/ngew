import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<User> {

  constructor(private user: UserService) { }

  resolve(): Observable<User> | Promise<User> {
    return this.user.currentUserSnapshot;
  }
}
