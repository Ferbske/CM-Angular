import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {InfoService} from './info.service';

@Injectable()
export class ResolveCountriesService implements Resolve<any> {
  constructor(private infoService: InfoService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return this.infoService.getCountries();
  }
}
