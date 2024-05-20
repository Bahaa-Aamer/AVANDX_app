import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Form, Validators } from '@angular/forms';

@Component({
  selector: 'app-keep-in-touch',
  templateUrl: './keep-in-touch.component.html',
  styleUrls: ['./keep-in-touch.component.css'],
})
export class KeepInTouchComponent implements OnInit {
  form: FormGroup;

  constructor() {}
  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(null, [Validators.required, this.noSpace]),
      lastName: new FormControl(null, [Validators.required, this.noSpace]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      tel: new FormControl(null, [
        Validators.required,
        Validators.minLength(11),
      ]),
      message: new FormControl(null, [Validators.required]),
    });
  }

  submit() {}

  noSpace(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { noSpace: true };
    }
    return null;
  }
}
