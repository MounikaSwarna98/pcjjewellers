import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/rx';
import { shareReplay } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from 'src/app/data/hero';
@Injectable({
  providedIn: 'root'
})
export class DropdownsService {

  constructor(private _http: HttpClient) { }
    getRings() {
        return this._http.get<Hero[]>(environment.Rings_URL).pipe();
        
        
        
        
        
        
        
    }
}

