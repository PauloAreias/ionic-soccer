import { Component, OnInit } from '@angular/core';

import { EquipasInfoService } from "./equipas-info.service";
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';


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
    private menuCtrl: MenuController) { }

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

    this.InfoService.getInfoTeams(this.id).subscribe(infoteam => this.info = infoteam);
  }

  onImageError(event){
    console.log(event);
    event.target.src="https://i.ya-webdesign.com/images/no-image-png-12.png";
  }

  SelectInfo(tinfo){
    this.tinfo = tinfo;

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
