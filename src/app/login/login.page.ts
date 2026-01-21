import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonAlert,
  IonButton,
  IonContent,
  IonInput,
} from '@ionic/angular/standalone';

import { MockAuthService } from '../core/services/mock-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonAlert,
    IonButton,
    IonContent,
    IonInput,
  ],
})
export class LoginPage {
  alertOpen = false;

  loginForm = this.formBuilder.group({
    correo: ['', [Validators.required, Validators.email]],
    clave: ['', [Validators.required]],
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly authService: MockAuthService,
  ) {}

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

  onGuestAccess(): void {
    this.authService.enableGuestMode();
    void this.router.navigateByUrl('/home');
  }
}
