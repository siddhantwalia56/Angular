import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs/';

export interface CanComponentDeactivate{
  canDecativate:()=> Observable<boolean> |Promise<boolean>| boolean;
}

export class CanDecativateGuard implements CanDeactivate<CanComponentDeactivate>{
  canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot):
                Observable<boolean> | Promise<boolean> | boolean{
    return component.canDecativate();
  }
}
