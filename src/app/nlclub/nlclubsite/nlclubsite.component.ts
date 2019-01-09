import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { nlClub } from "../nlclub.model";

@Component({
  selector: 'app-nlclubsite',
  templateUrl: './nlclubsite.component.html',
  styleUrls: ['./nlclubsite.component.css']
})
export class NlclubsiteComponent implements OnInit {
  public club: nlClub;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id: string;
    id = this.route.snapshot.params['nl_id'];
    this.club = new nlClub(id);
  }

}
