import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  public handleLogin(username: string, password: string): Observable<string> {
    if (username === 'tim' && password === '123456') {
      return of(username);
    } else {
      return throwError('Wrong credentials');
    }
  }

}
