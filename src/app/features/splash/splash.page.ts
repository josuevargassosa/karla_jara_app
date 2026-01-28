import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

import { MockAuthService } from '../../core/services/mock-auth.service';

interface SplashCircle {
  label: string;
  size: number;
  top: string;
  left: string;
  delay: string;
  duration: string;
}

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  imports: [CommonModule, IonContent],
})
export class SplashPage implements OnInit {
  title = 'The Bridge';
  subtitle = '';

  circles: SplashCircle[] = [
    { label: 'Amor', size: 130, top: '8%', left: '12%', delay: '0s', duration: '7s' },
    { label: 'Suicidio', size: 110, top: '20%', left: '62%', delay: '1s', duration: '9s' },
    { label: 'Familia', size: 90, top: '50%', left: '8%', delay: '0.5s', duration: '8s' },
    { label: 'Mindfulness', size: 150, top: '58%', left: '55%', delay: '1.5s', duration: '10s' },
    { label: 'Sexo', size: 80, top: '72%', left: '24%', delay: '2s', duration: '6.5s' },
    { label: 'Trauma', size: 95, top: '35%', left: '32%', delay: '0.8s', duration: '7.5s' },
    { label: 'Bienestar', size: 120, top: '12%', left: '42%', delay: '1.2s', duration: '9.5s' },
    { label: 'Relaciones', size: 100, top: '72%', left: '70%', delay: '0.3s', duration: '8.5s' },
  ];

  constructor(
    private readonly authService: MockAuthService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    const user = this.authService.getCurrentUser();

    if (user) {
      this.title = `Primero ${user.nombre}`;
      this.subtitle = 'The Bridge';
    } else {
      this.title = 'The Bridge';
      this.subtitle = '';
    }

  }

  navigateToLogin(): void {
    this.MapsToLogin();
  }

  MapsToLogin(): void {
    void this.router.navigateByUrl('/login');
  }
}
