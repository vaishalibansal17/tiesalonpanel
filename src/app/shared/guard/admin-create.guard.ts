import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminCreateGuard implements CanActivate {
  constructor(
    private myRoute: Router) {
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('byAdmin') == "1") {      
      this.myRoute.navigate(['/main/profile/change-password']);
      return false;
    } else {
      return true;
    }
  }
}
