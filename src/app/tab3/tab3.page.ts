import { Component, OnInit } from '@angular/core';
import { Tab3Service } from "./tab3.service";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit  {

  equipas: {}
  liga:String;

  constructor(private equipaService: Tab3Service) { }



  ngOnInit() {

    this.liga= "PPL";

    this.getCurrentTeams(this.liga);
 
  }


  SelectEquipas(liga){
    this.liga=liga;
    this.getCurrentTeams(liga);
}



getCurrentTeams(Liga){

  this.equipaService.getCurrentTeams(Liga).subscribe(teams => this.equipas = teams);
}

onImageError(event){
  console.log(event);
  event.target.src="https://www.vermeer.com.au/wp-content/uploads/2016/12/attachment-no-image-available.png";
}

}
