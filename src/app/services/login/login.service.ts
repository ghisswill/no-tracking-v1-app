import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../../models/user.model';
import { map, Observable, of, tap } from 'rxjs';

export interface Credentials {
  username: string;
  passsword: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private http = inject(HttpClient);
  private errorService = inject(HttpErrorResponse);
  private usersUrl = 'api/users';
  user = signal<User | null | undefined>(undefined);

  constructor() {
  }

  login(credentials: Credentials): Observable<User | null | undefined> {
    return this.http.post<User>(this.usersUrl, credentials).pipe(
      tap((result: any) => {
        localStorage.setItem('token', result['token']);
        const user = Object.assign(new User(), result['user']);
        this.user.set(user);
      }),
      map((result: any) => {
        return this.user();
      })
    );
  }

}
