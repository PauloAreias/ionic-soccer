import { Component, OnInit } from '@angular/core';
import { Tab1Service } from "./tab1.service";
import { MenuController } from '@ionic/angular';
import { AlertController, NavController } from '@ionic/angular';


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

  constructor(private ligaService: Tab1Service,
    private menuCtrl: MenuController
    , private AlertController: AlertController, 
    public navCtrl: NavController) {}

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

    this.ligaService.getCurrentLiga(liga).subscribe(response => {this.ligas = response},
      error => { 
        this.onIonError();
      }
    );
  }



getCurrentStandings(Liga){

    this.ligaService.getCurrentStandings(Liga).subscribe(response => {this.standings = response},
      error => { 
        this.onIonError();
      }
    );
  }

  closeMenu() {
    this.menuCtrl.close();
  }

  async onIonError(){
    const errorAlert =await  this.AlertController.create({
      message:"Não será possível carregar os dados da API nos próximos momentos",
      buttons:[{text:"Fechar"}]
    });
    await errorAlert.present()
  }

  

}
