import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {

  text: string ;
  name: string ;
  dataPL = {
    "paragraphs": [
      { "name":"", "text":" 5 stars" }
    ]
  };

  constructor() { }

  ngOnInit() {

    this.name="";
    this.text="";

  }

  


  addParagraph(nome: string, texto: string){
    if(this.text!=''){
    this.dataPL.paragraphs.push( { "name": nome, "text": texto});
   this.text="";
   this.name="";
    } 
  }

}
  