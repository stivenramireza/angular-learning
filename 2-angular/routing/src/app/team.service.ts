import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  team: any[] = [
    {
      name: 'Stiven',
      ocupation: 'Front-End Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam corrupti ipsum nobis, velit laboriosam quae sequi.'
    },
    {
      name: 'Gilberth',
      ocupation: 'Front-End Developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam corrupti ipsum nobis, velit laboriosam quae sequi.'
    }
  ];

  constructor() { 
    console.log('it works');
  }

  getTeam() {
    return this.team;
  }

  getOne(i) {
    return this.team[i];
  }
}
