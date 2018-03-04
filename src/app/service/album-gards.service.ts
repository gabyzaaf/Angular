import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";

@Injectable()
export class AlbumGardsService implements CanActivate{
  

  constructor(private _route:Router)
  {

  }
  
  canActivate(route: ActivatedRouteSnapshot): boolean {
    let id = +route.url[1].path;
    if(isNaN(id) || id <= 0){
      alert("the is "+id+" is not associated");
      this._route.navigate(['/products']);
      return false;
    }
    return true;
  }


}
