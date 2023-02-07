import { Injectable } from '@angular/core';
import {Resolve,ActivatedRouteSnapshot,RouterStateSnapshot,Router} from '@angular/router';
import { Property } from 'src/app/model/Property';
import { Observable, of } from 'rxjs';
import { Houseservice } from 'src/app/services/Houseservice';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PropertyDetailResolverService implements Resolve<Property> {
  constructor(private router: Router, private houseservice: Houseservice) {}

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Property> | Property {
    const propId = Number(route.params['id']);
    return this.houseservice.GetProperty(propId).pipe(
      catchError((error) => {
        this.router.navigate(['/'])
        return of(null);
      })
    )
  }
}
