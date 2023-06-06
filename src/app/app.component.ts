import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  text: string = 'pipes in angular';
  users: any[] = [
    {
      id: 101,
      name: 'raju',
      city: 'HYDERABAD',
      salary: 20000,
      dob: new Date('10/12/1988'),
    },
    {
      id: 102,
      name: 'ravi',
      city: 'DELHI',
      salary: 10000,
      dob: new Date('10/12/1998'),
    },
    {
      id: 103,
      name: 'ramu',
      city: 'BANGALORE',
      salary: 40000,
      dob: new Date('10/12/1990'),
    },
    {
      id: 104,
      name: 'rohan',
      city: 'GOA',
      salary: 50000,
      dob: new Date('10/12/1984'),
    },
  ];
}
