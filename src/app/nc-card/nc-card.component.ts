import { Component, OnInit } from '@angular/core';

import { Nerdcast } from "../nerdcast";
import { NerdcastService } from './nc-card.service';

@Component({
  selector: 'app-nc-card',
  templateUrl: './nc-card.component.html',
  providers: [NerdcastService],
  styleUrls: ['./nc-card.component.css']
})
export class NcCardComponent implements OnInit {
  nerdcasts: Nerdcast[];
  
  constructor(private nerdcastsService: NerdcastService) { }

  ngOnInit(): void {
    this.getNerdcasts();
    console.log(this.nerdcasts);
  }
  getNerdcasts(): void {
    this.nerdcastsService.getNerdcasts()
      .subscribe(nerdcasts => (this.nerdcasts = nerdcasts));
    console.log(this.nerdcasts);
  }
}
