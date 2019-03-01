import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from './auth.service';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import * as fromUser from './state/user.reducer';
import { takeWhile } from 'rxjs/operators';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  pageTitle = 'Log In';
  errorMessage: string;
  sub: Subscription;

  maskUserName: boolean;
  componentActive = true;

  constructor(private authService: AuthService,
              private router: Router,
              private store: Store<fromUser.UserState>) {
  }

  ngOnInit(): void {
    

// TODO unsubcribe
   this.store.pipe(select(fromUser.getShowUserName),
   takeWhile(() => this.componentActive)).subscribe(
     showUserName => this.maskUserName = showUserName
   );
  }

  ngOnDestroy(): void {
     this.componentActive = false;
  }

  cancel(): void {
    this.router.navigate(['welcome']);
  }

  checkChanged(value: boolean): void {
    this.store.dispatch({
      type: 'TOGGLE_MASK_USERNAME',
      payload: value
    });
  }

  login(loginForm: NgForm): void {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.authService.login(userName, password);

      if (this.authService.redirectUrl) {
        this.router.navigateByUrl(this.authService.redirectUrl);
      } else {
        this.router.navigate(['/products']);
      }
    } else {
      this.errorMessage = 'Please enter a user name and password.';
    }
  }
}
