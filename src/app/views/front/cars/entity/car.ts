export class Car {
  public _id?: string;
  public image: string;
  public departureDateTime: Date;
  public departureLocation: string;
  public destinationLocation: string;
  public seatPrice: number;
  public seatAvailable: string;
  public model: string;
  public matricule: string;
  public status: string;

  constructor(
    image: string,
    departureDateTime: Date,
    departureLocation: string,
    destinationLocation: string,
    seatPrice: number,
    seatAvailable: string,
    model: string,
    matricule: string,
    status: string
  ) {
    this.image = image;
    this.departureDateTime = departureDateTime;
    this.departureLocation = departureLocation;
    this.destinationLocation = destinationLocation;
    this.seatPrice = seatPrice;
    this.seatAvailable = seatAvailable;
    this.model = model;
    this.matricule = matricule;
    this.status = status;
  }
}
