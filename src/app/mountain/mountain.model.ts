export class Berg {

  public id: string;
  public name: string;
  public elevation: number;
  public img: string;
  public coordinates: { longitude: number, latitude: number };

  constructor(id: string, name: string, elevation: number, img: string, longitude: number, latitude: number) {
    this.id = id;
    this.name = name;
    this.elevation = elevation;
    this.img = img;
    this.coordinates = { longitude, latitude };
  }
}
