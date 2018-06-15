import { Component, OnInit } from '@angular/core';
import { User } from '../classes/User';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  user:User = new User('nartawak', 'test');
  constructor() { }

  ngOnInit() {
  }

  handleSubmit() {
    console.log("Form value", this.user);
  }
}
