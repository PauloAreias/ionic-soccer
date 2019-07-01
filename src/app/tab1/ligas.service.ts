import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class LigasService {

settings ={
  "async": true,
  "crossDomain": true,
  "url": "https://api.football-data.org/v2/competitions/",
  "method": "GET",
  "headers": {
    "X-Auth-Token": "9013937226534a229c6f74cc0fa542a3",
    "cache-control": "no-cache",
    "Postman-Token": "d839ddd9-eb5f-4b60-8a6e-ac6250d374bc"

}
}
  

  constructor(private http: HttpClient) { }

  getCurrentLiga(liga){

    let headers: HttpHeaders = new HttpHeaders;

    headers = headers.append("X-Auth-Token",this.settings.headers["X-Auth-Token"]);



    return this.http.get(this.settings.url + liga , {headers: headers});

  }

  getCurrentStandings(liga){

    let headers: HttpHeaders = new HttpHeaders;

   headers = headers.append("X-Auth-Token",this.settings.headers["X-Auth-Token"]);

   return this.http.get(this.settings.url + liga + "/standings" , {headers: headers});
  }


}
