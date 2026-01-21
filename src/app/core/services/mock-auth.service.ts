import { Injectable } from '@angular/core';

import { Usuario } from '../../models/app.models';

@Injectable({
  providedIn: 'root',
})
export class MockAuthService {
  login(): void {
    localStorage.setItem('auth_token', 'fake-token');
    localStorage.setItem('user_role', 'admin');
    localStorage.setItem('user_name', 'KARLA');
    localStorage.removeItem('guest');
  }

  enableGuestMode(): void {
    localStorage.setItem('guest', 'true');
    localStorage.setItem('user_role', 'guest');
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_name');
  }

  getCurrentUser(): Usuario | null {
    const token = localStorage.getItem('auth_token');
    const role = localStorage.getItem('user_role');

    if (!token || role !== 'admin') {
      return null;
    }

    return {
      id: 'admin',
      nombre: localStorage.getItem('user_name') ?? 'KARLA',
      role: 'admin',
    };
  }
}
