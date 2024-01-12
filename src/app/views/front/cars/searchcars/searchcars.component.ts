import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchcars',
  templateUrl: './searchcars.component.html',
  styleUrls: ['./searchcars.component.css']
})
export class SearchcarsComponent {
  @Output() searchEvent = new EventEmitter<{ departure: string, destination: string }>();
  departureLocation: string = '';
  destinationLocation: string = '';

  searchCars() {
    console.log('Departure Location:', this.departureLocation);
  console.log('Destination Location:', this.destinationLocation);
    this.searchEvent.emit({ departure: this.departureLocation, destination: this.destinationLocation });
  }
}
