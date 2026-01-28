import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
    IonContent,
    IonButton,
    IonInput,
    IonIcon,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoGoogle, logoApple, eyeOutline, eyeOffOutline, arrowBack } from 'ionicons/icons';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        IonContent,
        IonButton,
        IonInput,
        IonIcon,
        IonHeader,
        IonToolbar,
        IonButtons,
        IonBackButton,
    ],
})
export class RegisterPage {
    showPassword = false;
    showConfirmPassword = false;
    private readonly formBuilder = inject(FormBuilder);
    private readonly router = inject(Router);

    registerForm = this.formBuilder.group({
        username: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
    });

    constructor() {
        addIcons({ logoGoogle, logoApple, eyeOutline, eyeOffOutline, arrowBack });
    }

    togglePasswordVisibility(): void {
        this.showPassword = !this.showPassword;
    }

    toggleConfirmPasswordVisibility(): void {
        this.showConfirmPassword = !this.showConfirmPassword;
    }

    onSubmit(): void {
        if (this.registerForm.invalid) {
            this.registerForm.markAllAsTouched();
            return;
        }

        const { password, confirmPassword } = this.registerForm.getRawValue();

        if (password !== confirmPassword) {
            // TODO: Show error message
            return;
        }

        // TODO: Implement actual registration logic
        void this.router.navigateByUrl('/home');
    }

    onSocialRegister(provider: string): void {
        // TODO: Implement social registration
        console.log(`Register with ${provider}`);
    }

    navigateToLogin(): void {
        void this.router.navigateByUrl('/login');
    }
}
