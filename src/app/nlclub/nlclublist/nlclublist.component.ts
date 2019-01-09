import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { nlClub } from '../nlclub.model';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-nlclublist',
  templateUrl: './nlclublist.component.html',
  styleUrls: ['./nlclublist.component.css']
})
export class NlclublistComponent implements OnInit {
  clubs: Map<string, nlClub>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.clubs = new Map();

    for (const club of environment.clubs) {
      this.clubs.set(club[0], new nlClub(club[0]));
    }
  }

}
