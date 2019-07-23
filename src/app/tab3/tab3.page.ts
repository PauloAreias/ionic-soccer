import { Component, OnInit } from '@angular/core';
import { Tab3Service } from "./tab3.service";
import { MenuController } from '@ionic/angular';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit  {

  equipas: {}
  liga:String;

  constructor(private equipaService: Tab3Service,
    private menuCtrl: MenuController,
    private AlertController: AlertController, 
    public navCtrl: NavController) { }



  ngOnInit() {

    this.liga= "PPL";

    this.getCurrentTeams(this.liga);
 
  }


  SelectEquipas(liga){
    this.liga=liga;
    this.getCurrentTeams(liga);
}



getCurrentTeams(Liga){

  this.equipaService.getCurrentTeams(Liga).subscribe(response => {this.equipas = response},
    error => { 
      this.onIonError();
    }
  );
}

onImageError(event){
  console.log(event);
  event.target.src="https://www.vermeer.com.au/wp-content/uploads/2016/12/attachment-no-image-available.png";
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
