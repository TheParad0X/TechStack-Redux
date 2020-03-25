import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import * as appSelectors from 'app/store/app.selectors';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SecurityGuard implements CanActivateChild {

  public selectCurrentUser = appSelectors.selectCurrentUser;

  constructor(public store: Store<any>, private router: Router) {
  }

  public canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean | UrlTree> {
    let result: string;
    // subscribe() runs synchonously
    this.store.select(this.selectCurrentUser).pipe(first()).subscribe(r => result = r);
    if (result !== '') {
      return true;
    }
    this.router.navigate(['login']);
  }

}
