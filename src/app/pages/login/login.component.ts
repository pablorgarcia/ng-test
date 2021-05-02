import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.loginFormGroup = this.fb.group({
      user: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  submitLogin(): void {
    sessionStorage.setItem('user', JSON.stringify(this.loginFormGroup.value));
    this.router.navigateByUrl('');
  }

}
