import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../../models/user.model';
import { Observable, of } from 'rxjs';

export interface Credentials {
  username: string;
  passsword: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userConnected: User = {
    username: 'sa',
    lastName: 'text',
    firstName: 'text',
    password: '1234'
  }

  private http = inject(HttpClient);
  user = new User;

  constructor() { 
    localStorage.setItem('userConnected', JSON.stringify(this.userConnected));
  }

  login(credentials: Credentials): Observable<User> {
    
    if(this.userConnected.password == credentials.passsword && this.userConnected.username == credentials.username) {
      this.user = this.userConnected;
    }
    return of(this.user);
  }

  getUser(): Observable<User> {
    return of(this.userConnected);
  }

  logout(): Observable<null> {
    localStorage.removeItem('userConnected');
    return of(null);
  }
}
