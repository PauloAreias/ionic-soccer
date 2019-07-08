import { Component, OnInit } from '@angular/core';
import { Tab2Service } from "./tab2.service";
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  equipas: {}
  matches: {}
  liga:String;
  estado: String;

  

  constructor(private equipaService: Tab2Service,
    private menuCtrl: MenuController) { }



  ngOnInit() {

    this.liga= "CL";
    this.estado= "FINISHED"

    this.getCurrentTeams(this.liga);

    this.getCurrentMatches(this.liga, this.estado);
 
  }

  SelectEquipas(liga){
    this.liga=liga;
    this.getCurrentTeams(liga);
    this.getCurrentMatches(this.liga, this.estado);

}

SelectStatus(status){
  this.estado= status;
  this.getCurrentMatches(this.liga, this.estado);
}

getCurrentMatches(Liga, estado){

  this.equipaService.getCurrentMatches(Liga, estado).subscribe(matches => this.matches = matches);

}

getCurrentTeams(Liga){

  this.equipaService.getCurrentTeams(Liga).subscribe(teams => this.equipas = teams);
}


onNumberError(event){
  console.log(event);
  event.target= "?";
}

openMenu() {
  this.menuCtrl.open();
}

closeMenu() {
  this.menuCtrl.close();
}

toggleMenu() {
  this.menuCtrl.toggle();
}


}
