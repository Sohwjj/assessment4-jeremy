import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  finalSearchCriteria: string;

  constructor(private http:HttpClient) { }

  getStalls(criteria): Observable<any> {
    this.finalSearchCriteria = `/stalls?location=${criteria.location}`;
    console.log(this.finalSearchCriteria);
    return this.http.get(`${environment.api_url}${this.finalSearchCriteria}`);
  }

}
