import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

import { Nerdcast } from "../nerdcast";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable()
export class NerdcastService {
  nerdcastUrls = "https://api.jovemnerd.com.br/wp-json/jovemnerd/v1/nerdcasts/";
  private handleError;

  constructor(private http: HttpClient) {  }

  getNerdcasts(): Observable<Nerdcast[]> {
    return this.http
      .get<Nerdcast[]>(this.nerdcastUrls);
  }
}
