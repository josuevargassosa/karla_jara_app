import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonAlert,
  IonButton,
  IonContent,
  IonInput,
  IonIcon,
  IonCheckbox,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoGoogle, logoApple, eyeOutline, eyeOffOutline, arrowBack } from 'ionicons/icons';

import { MockAuthService } from '../../core/services/mock-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonAlert,
    IonButton,
    IonContent,
    IonInput,
    IonIcon,
    IonCheckbox,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
  ],
})
export class LoginPage {
  alertOpen = false;
  showPassword = false;
  rememberMe = false;
  private readonly formBuilder = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly authService = inject(MockAuthService);

  loginForm = this.formBuilder.group({
    correo: ['', [Validators.required, Validators.email]],
    clave: ['', [Validators.required]],
  });

  constructor() {
    addIcons({ logoGoogle, logoApple, eyeOutline, eyeOffOutline, arrowBack });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { correo, clave } = this.loginForm.getRawValue();

    if (correo === 'admin' && clave === 'admin') {
      this.authService.login();
      void this.router.navigateByUrl('/home');
      return;
    }

    this.alertOpen = true;
  }

  onSocialLogin(provider: string): void {
    // TODO: Implement social login
    console.log(`Login with ${provider}`);
  }

  onForgotPassword(): void {
    // TODO: Implement forgot password
    console.log('Forgot password clicked');
  }

  navigateToRegister(): void {
    void this.router.navigateByUrl('/register');
  }

  onGuestAccess(): void {
    this.authService.enableGuestMode();
    void this.router.navigateByUrl('/home');
  }
}
