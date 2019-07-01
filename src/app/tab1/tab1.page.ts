import { Component, OnInit } from '@angular/core';
import { Tab1Service } from "./tab1.service";


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  ligas: {}
  standings: {}
  liga : String;
  name: String;

  constructor(private ligaService: Tab1Service) {}

  ngOnInit() {

    this.ligaService.getCurrentLiga(this.liga);

    this.liga= "PPL";

    // this.name ="1ª Liga"

    this.getCurrentLiga(this.liga)

    this.getCurrentStandings(this.liga);
 
  }

  SelectLiga(liga){
    // this.name= name;
    this.liga=liga;
    this.getCurrentLiga(liga);
    this.getCurrentStandings(liga);
  }

  getCurrentLiga(liga){

    this.ligaService.getCurrentLiga(liga).subscribe(league => this.ligas = league);
  }



getCurrentStandings(Liga){

    this.ligaService.getCurrentStandings(Liga).subscribe(teams => this.standings = teams);
  }

}
