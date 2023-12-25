import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchcars',
  templateUrl: './searchcars.component.html',
  styleUrls: ['./searchcars.component.css']
})
export class SearchcarsComponent {

  @Output() searchEvent = new EventEmitter<string>();

  sendSearchTerm(search : string){
    this.searchEvent.emit(search);
  }

}
