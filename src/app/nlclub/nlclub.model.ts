import { environment } from 'src/environments/environment';

export class nlClub {

    public championshipTitle: number[] = new Array();

    public nl_id: string;
    public nl_name: string;
    public nl_founderyear: number;
    public nl_coach: string;
    public nl_ceo: string;
    public nl_sportchef: string;
    public nl_stadion: string;
    public nl_chairs: number;
    public nl_stand: number;
    public nl_total: number;
    public nl_address: string;
    public nl_postalcode: string;
    public nl_city: string;
    public nl_email: string;
    public nl_logo: string;
    public nl_photo: string;

    constructor (id: string) {

        for (const club of environment.clubs) {
          if (club[0] === id) {
            this.nl_id = club[0];
            this.nl_name = club[1];
            this.nl_founderyear = Number(club[2]);
            this.nl_coach = club[3];
            this.nl_ceo = club[4];
            this.nl_sportchef = club[5];
            this.nl_stadion = club[6];
            this.nl_chairs = Number(club[7]);
            this.nl_stand = Number(club[8]);
            this.nl_total = Number(club[8]) + Number(club[7]);
            this.nl_address = club[9];
            this.nl_postalcode = club[10];
            this.nl_city = club[11];
            this.nl_email = club[12];
            this.nl_logo =  "assets/nl_assets/" + club[13];
            this.nl_photo = "assets/nl_assets/" + club[14];
          }
        }
    
        for (const year of environment.championship) {
          if (year[2] === id) {
            this.championshipTitle.push(Number(year[0]));
          }
        }
    
      }

  }