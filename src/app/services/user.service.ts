import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {

  public addUser(username: string): Observable<string> {
    return of(username).pipe(delay(1000));
  }

  public deleteUser(username: string): Observable<string> {
    return of(username).pipe(delay(1000));
  }
}
