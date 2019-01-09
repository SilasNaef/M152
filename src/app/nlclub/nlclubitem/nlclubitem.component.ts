import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { nlClub } from "../nlclub.model";

@Component({
  selector: 'app-nlclubitem',
  templateUrl: './nlclubitem.component.html',
  styleUrls: ['./nlclubitem.component.css']
})
export class NlclubitemComponent implements OnInit {
  @Input() nl_club: nlClub;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
