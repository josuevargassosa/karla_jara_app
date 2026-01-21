import { Injectable } from '@angular/core';

import { Usuario } from '../models/app.models';

@Injectable({
  providedIn: 'root',
})
export class MockAuthService {
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
