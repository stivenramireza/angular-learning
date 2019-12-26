import { Component, OnInit } from '@angular/core';
import { TeamService } from './../team.service';

@Component({
  selector: 'app-we',
  templateUrl: './we.component.html',
  styleUrls: ['./we.component.css']
})
export class WeComponent implements OnInit {

  team: any[] = [];

  constructor(private _service: TeamService) {
    this.team = _service.getTeam();
  }
  
  ngOnInit() {
  }

}
