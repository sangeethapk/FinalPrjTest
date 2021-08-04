import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router,private route:ActivatedRoute){}
  canActivate():boolean{
if(localStorage.getItem("token")==="token"){
  return true;
}
else{
     
  //this.router.navigate(['.login']);
  this.router.navigate(['../login'],{ relativeTo: this.route});
  return false;
}

  }
   
  
}
