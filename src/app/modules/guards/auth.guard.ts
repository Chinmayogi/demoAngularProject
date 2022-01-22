import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from '../services/global.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private global: GlobalService) {

    }
    env = {}
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        // if (this.globalService.getToken() == null) {
        //   this.router.navigate(['/login']);
        // }
        let data = this.global.getUser();
    
        debugger
        if (data != null) {
             
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
        // return true;
    }

}
