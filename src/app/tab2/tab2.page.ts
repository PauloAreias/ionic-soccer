import { Component, OnInit } from '@angular/core';
import { Tab2Service } from "./tab2.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  equipas: {}
  matches: {}
  liga:String;

  

  constructor(private equipaService: Tab2Service) { }



  ngOnInit() {

    this.liga= "CL";

    this.getCurrentTeams(this.liga);

    this.getCurrentMatches(this.liga);
 
  }

  SelectEquipas(liga){
    this.liga=liga;
    this.getCurrentTeams(liga);
    this.getCurrentMatches(this.liga);
}

getCurrentMatches(Liga){

  this.equipaService.getCurrentMatches(Liga).subscribe(matches => this.matches = matches);

}

getCurrentTeams(Liga){

  this.equipaService.getCurrentTeams(Liga).subscribe(teams => this.equipas = teams);
}



}
