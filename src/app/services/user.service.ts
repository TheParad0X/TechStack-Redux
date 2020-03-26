import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {

  public addUser(username: string): Observable<string> {
    return of(username).pipe(delay(1000));
  }

  public deleteUser(username: string): Observable<string> {
    return of(username).pipe(delay(500));
  }

  public loadAllUsers(): Observable<string[]> {
    const users = ['Robert', 'Raphael', 'Marcel', 'Rezgar', 'Tim'];
    return of(users).pipe(delay(1000));
  }
}
