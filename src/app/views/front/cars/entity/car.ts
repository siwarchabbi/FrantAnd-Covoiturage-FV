export class Car{
  constructor(
    private _id:number,
    private _image: String,
    private _departureDateTime:Date,
    private _departureLocation:String,
    private _destinationLocation:String,
    private _seatPrice:number,
    private _seatAvailable:String,
    private _model:String,
    private _matricule:String,
    private _status:String
    ){}
  public get id(): number {
      return this._id;
  }

  public set id(value: number) {
      this._id = value;
  }

  public get image(): String {
      return this._image;
  }

  public set image(value: String) {
      this._image = value;
  }

  public get departureDateTime(): Date {
      return this._departureDateTime;
  }

  public set departureDateTime(value: Date) {
      this._departureDateTime = value;
  }

  public get departureLocation(): String {
      return this._departureLocation;
  }

  public set departureLocation(value: String) {
      this._departureLocation = value;
  }

  public get destinationLocation(): String {
      return this._destinationLocation;
  }

  public set destinationLocation(value: String) {
      this._destinationLocation = value;
  }

  public get seatPrice(): number {
      return this._seatPrice;
  }

  public set seatPrice(value: number) {
      this._seatPrice = value;
  }

  public get seatAvailable(): String {
      return this._seatAvailable;
  }

  public set seatAvailable(value: String) {
      this._seatAvailable = value;
  }

  public get model(): String {
      return this._model;
  }

  public set model(value: String) {
      this._model = value;
  }

  public get matricule(): String {
      return this._matricule;
  }

  public set matricule(value: String) {
      this._matricule = value;
  }

  public get status(): String {
      return this._status;
  }

  public set status(value: String) {
      this._status = value;
  }
}
