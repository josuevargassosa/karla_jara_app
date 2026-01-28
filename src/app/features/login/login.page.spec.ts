import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { MockAuthService } from '../../core/services/mock-auth.service';
import { Router } from '@angular/router';

describe('LoginPage', () => {
    let component: LoginPage;
    let fixture: ComponentFixture<LoginPage>;
    let mockAuthService: jasmine.SpyObj<MockAuthService>;
    let mockRouter: jasmine.SpyObj<Router>;

    beforeEach(async () => {
        mockAuthService = jasmine.createSpyObj('MockAuthService', ['login', 'enableGuestMode']);
        mockRouter = jasmine.createSpyObj('Router', ['navigateByUrl']);

        await TestBed.configureTestingModule({
            imports: [LoginPage],
            providers: [
                { provide: MockAuthService, useValue: mockAuthService },
                { provide: Router, useValue: mockRouter },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(LoginPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should invalidate form for "admin" as email because of Validator.email', () => {
        const emailControl = component.loginForm.controls['correo'];
        emailControl.setValue('admin');
        expect(emailControl.valid).withContext('Email should be invalid for "admin"').toBeFalse();
        expect(emailControl.hasError('email')).withContext('Should have email error').toBeTrue();
    });

    it('should not call authService.login() when form is invalid despite matching hardcoded credentials', () => {
        component.loginForm.controls['correo'].setValue('admin');
        component.loginForm.controls['clave'].setValue('admin');

        expect(component.loginForm.invalid).withContext('Form should be invalid due to email validator').toBeTrue();

        component.onSubmit();

        expect(mockAuthService.login).withContext('Login should not be called when form is invalid').not.toHaveBeenCalled();
    });
});
