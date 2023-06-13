import { Component, Input } from '@angular/core';

export class User {
  name: string;
  firstName: string;
  age: number;
  quote: string;
  photo: string;
  ageVisible: boolean;

  constructor(
    name: string,
    firstName: string,
    age: number,
    @Input()
    quote: string,
    photo: string
  ) {
    this.name = name;
    this.firstName = firstName;
    this.age = age;
    this.quote = quote;
    this.photo = photo;
    this.ageVisible = false;
  }
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  user: User;
  constructor() {
    this.user = new User(
      'Doe',
      'John',
      25,
      '',
      'https://randomuser.me/api/portraits/lego/2.jpg'
    );
  }
}
