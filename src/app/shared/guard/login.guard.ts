import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpRequestService } from '../service/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private HttpService: HttpRequestService,
    private myRoute: Router){
      
    }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     if (this.HttpService.isLoggednIn()) {
        this.myRoute.navigate(['main/event']);
        return false;
      } else {
        return true
      }
    return true;
  }
}
