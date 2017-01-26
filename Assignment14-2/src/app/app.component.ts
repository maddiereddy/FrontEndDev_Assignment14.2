import { Component } from '@angular/core';
import { WikiService } from './wiki.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ WikiService ]
})
export class AppComponent {
  title: string = "Search Wikipedia"

  constructor( public wikiService: WikiService){}

  items: string[];


  //returns an array of string results
  //to be rendered in a table

  searchWiki(searchItem: string){
    this.wikiService.searchWiki(searchItem).then(
      response => this.items = response,
      error => console.log(error)
    )
  }
}
