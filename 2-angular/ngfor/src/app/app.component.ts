import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  animals:Array<any> = [
    {type: 'Dog', name: 'Lisa', age: 10},
    {type: 'Cat', name: 'Pepon', age: 2},
    {type: 'Duck', name: 'TanTan', age: 7}
  ]
}
