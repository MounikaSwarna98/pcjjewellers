import { Component, OnInit } from '@angular/core';
import { DropdownsService } from './dropdowns.service';
import { Hero } from '../../data/hero';


@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css']
})
export class DropdownsComponent implements OnInit {
  private rings;
  RingsList: Hero[] = [];
  keys:String[];
  private dropdownsService;
  constructor(private _dropdownsService:DropdownsService) { }

  ngOnInit() {
    
}


getRings(){
  //var dropdown=(<HTMLCollectionOf<Element>>document.getElementsByClassName('dropdownbuttons')).style.display = 'block';
  this._dropdownsService.getRings()
  .subscribe(
    data => {
      this.RingsList = <Hero[]>data;
      console.log( 'this.RingsList', this.RingsList);
     

    },
    error => console.error(error)
  );
this.keys=Object.keys(this.RingsList);
for(let key in this.keys){
  console.log(key);
}
console.log(this.keys);

}
  
  
  
  
  
  
  
  
  
  }




