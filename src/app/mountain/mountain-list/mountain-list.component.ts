import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Berg } from '../mountain.model';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-mountain-list',
  templateUrl: './mountain-list.component.html',
  styleUrls: ['./mountain-list.component.css']
})
export class MountainListComponent implements OnInit {
  mountains: Map<string, Berg> = new Map();

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    const config = environment.mountains;
    const mntParam: string = this.route.snapshot.params['id'];
    
    if (mntParam) {
      for (let mountain of config.features) {
        if (mountain.properties.id == mntParam) {
          this.mountains.set(mountain.properties.id,
            new Berg(mountain.properties.id,
              mountain.properties.name,
              mountain.properties.el,
              mountain.properties.img,
              mountain.geometry.coordinates[0],
              mountain.geometry.coordinates[1]));
        }

      }
    } else {
      for (let mountain of config.features) {
        this.mountains.set(mountain.properties.id,
          new Berg(mountain.properties.id, mountain.properties.name, mountain.properties.el,
            mountain.properties.img, mountain.geometry.coordinates[0],
            mountain.geometry.coordinates[1]));
      }
    }
    
  }

}
