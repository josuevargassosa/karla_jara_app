import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonButton,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonText,
    IonTitle,
    IonToolbar,
  ],
})
export class LoginPage {
  username = '';
  password = '';
  showErrors = false;
  authError = '';

  constructor(private readonly router: Router) {}

  handleLogin(): void {
    this.showErrors = true;
    this.authError = '';

    if (!this.username.trim() || !this.password.trim()) {
      return;
    }

    if (this.username === 'admin' && this.password === 'admin') {
      localStorage.setItem('auth_token', 'fake-token');
      localStorage.setItem('user_role', 'admin');
      localStorage.setItem('user_name', 'KARLA');
      localStorage.removeItem('guest');
      void this.router.navigateByUrl('/home');
      return;
    }

    this.authError = 'Credenciales inválidas. Intenta nuevamente.';
  }

  handleGuest(): void {
    localStorage.setItem('guest', 'true');
    localStorage.setItem('user_role', 'guest');
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_name');
    void this.router.navigateByUrl('/home');
  }
}
