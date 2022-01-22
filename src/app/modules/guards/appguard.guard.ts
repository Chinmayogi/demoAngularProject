import { Injectable, ChangeDetectorRef } from '@angular/core';
import { CanActivate, CanLoad, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { GlobalService } from '../services/global.service';
@Injectable({ providedIn: 'root' })
export class AppguardGuard implements CanActivate, CanLoad {
  constructor(private _router: Router, private global: GlobalService) {

  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.checkFun(route, state);
  }

  public canLoad() {
    return true;
  }

  private checkFun(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const that = this;
    return Observable.create((observer: Subject<boolean>) => {
      observer.next(true);
    }, (ex) => {
      if (ex.error == 'Wrong token provided') {
        //  this.global.clearUser();
        this._router.navigateByUrl('/login');

      }
    });


  }
}
