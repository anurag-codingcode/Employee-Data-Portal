import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-details-card',
  templateUrl: './details-card.component.html',
  styleUrls: ['./details-card.component.scss']
})
export class DetailsCardComponent {
  @Input() data:any
  @Input() isAdmin:any
  @Output() sendToParent=new EventEmitter()
  constructor(){
    
  }
  handleDelte(id:any){
    this.sendToParent.emit(id)

  }

}
