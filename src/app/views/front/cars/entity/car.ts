export class Car {
  public _id?: string;
  user: string;
  destinationLocation: string;
  departureDateTime: Date;
  departureLocation: string;
  seatPrice: number;
  seatAvailable: string;
  model: string;
  matricule: string;
  status: 'confirmed' | 'cancelled' | 'pending';
  image: string;

  constructor(
    user: string,
    destinationLocation: string,
    departureDateTime: Date,
    departureLocation: string,
    seatPrice: number,
    seatAvailable: string,
    model: string,
    matricule: string,
    status: 'confirmed' | 'cancelled' | 'pending',
    image: string
  ) {
    this.user = user;
    this.destinationLocation = destinationLocation;
    this.departureDateTime = departureDateTime;
    this.departureLocation = departureLocation;
    this.seatPrice = seatPrice;
    this.seatAvailable = seatAvailable;
    this.model = model;
    this.matricule = matricule;
    this.status = status;
    this.image = image;
  }
}
