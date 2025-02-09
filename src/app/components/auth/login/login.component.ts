import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials, LoginService } from '../../../services/login/login.service';
import { Subscription } from 'rxjs';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy {

  form!: FormGroup;
  private loginSubscription: Subscription | null = null;
  invalidCredentials: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService ) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    this.loginSubscription = this.loginService.login(this.form.value as Credentials)
    .subscribe({
      next: (result: User | undefined | null) => {
        this.goToDashoard();
      },
      error: error => {
        this.invalidCredentials = true;
      }
    })
  }

  goToDashoard() {
    this.router.navigate(['/dashboard']);
  }

  goToRegister() { 
    this.router.navigate(['/register']);
  }

  ngOnDestroy() {
    this.loginSubscription?.unsubscribe();
  }

}
