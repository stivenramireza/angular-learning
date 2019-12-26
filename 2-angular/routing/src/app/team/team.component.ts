import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from './../team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private _service: TeamService
  ) {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.team = this._service.getOne(params['id']);
    });
  }

  ngOnInit() {
  }

}
