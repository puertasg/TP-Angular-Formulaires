import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent implements OnInit {

  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  userForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.emailCtrl = fb.control('', [Validators.email, Validators.required]);
    this.passwordCtrl = fb.control('');

    this.userForm = fb.group({
      email: this.emailCtrl,
      password: this.passwordCtrl
    });
  }

  handleClear() {
    this.emailCtrl.setValue('');
    this.passwordCtrl.setValue('');
  }

  handleSubmit() {
    console.log(this.userForm.value);
  }

  ngOnInit() {
  }

}
