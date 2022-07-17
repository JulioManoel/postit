import { Component } from '@angular/core';
import { LoginPayload } from 'src/app/models/payload/login.payload';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {

  constructor() { }

  public loginPayload: LoginPayload = {
    email: '',
    password: '',
  }

  public login(): void {
    console.log(this.loginPayload);
  }

  public canLogin(): boolean {
    const regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');

    const emailIsValid = regex.test(this.loginPayload.email)
    if(emailIsValid && this.loginPayload.password,length >= 1) {
      console.log('test');
      return false;
    }
    return true;
  }

}
