import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss']
})
export class DetailsCardComponent {
  @Input() data:any
  @Input() isAdmin:any
  constructor(){
    
  }
  handleDelte(id:any){
    console.log(id)

  }
}
