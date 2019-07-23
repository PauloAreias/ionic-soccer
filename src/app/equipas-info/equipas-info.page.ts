import { Component, OnInit } from '@angular/core';

import { EquipasInfoService } from "./equipas-info.service";
import { ActivatedRoute, Router} from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-equipas-info',
  templateUrl: './equipas-info.page.html',
  styleUrls: ['./equipas-info.page.scss'],
})
export class EquipasInfoPage implements OnInit {

  info: {}
  id: String
  tinfo: String;

  constructor(private route: ActivatedRoute,
    private InfoService: EquipasInfoService,
    private menuCtrl: MenuController,
    private router: Router
    , private AlertController: AlertController, 
    public navCtrl: NavController) { }

  ngOnInit() {

    this.tinfo = "info"

    this.id="503";

    this.getCurrentInfo();
  }

  getCurrentInfo(){

    const team = this.route.snapshot.paramMap.get('id');

    if (team!=null){
      this.id= team;
    }

    this.InfoService.getInfoTeams(this.id).subscribe(response => {this.info = response},
      error => { 
        this.onIonError();
      }
    );
  }

  onImageError(event){
    console.log(event);
    event.target.src="https://i.ya-webdesign.com/images/no-image-png-12.png";
  }

  SelectInfo(tinfo){
    this.tinfo = tinfo;

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

  startMenu(){
    this.menuCtrl.isEnabled();
  }
  
  async onIonError(){
    const errorAlert =await  this.AlertController.create({
      message:"Não será possível carregar os dados da API nos próximos momentos",
      buttons:[{text:"Fechar"}]
    });
    await errorAlert.present()
  }

}
