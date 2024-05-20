import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css'],
})
export class JoinComponent implements OnInit {
  signInform: FormGroup;
  signUpform: FormGroup;
  errorMessage: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.signInform = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });

    this.signUpform = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    })

    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });
  }

  onSignin() {
    if (this.signInform.valid) {
      console.log(this.signInform.value);
    } else {
      alert('incorrect details');
    }
  }

  onSignup() {
    if (this.signInform.valid) {
      console.log(this.signInform.value);
    } else {
      alert('incorrect details');
    }
  }
}
