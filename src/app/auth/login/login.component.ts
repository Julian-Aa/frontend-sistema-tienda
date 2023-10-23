import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { User } from '../register/user.model';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email!: string;
  password!: string;
  formLogin: FormGroup;
  usuario: User = {
    id: 0,
    name: '',
    userName: '',
    email: '',
    address: '',
    phone: '',
    type: '',
    password: '',
  };
  constructor(private http: LoginService, private router: Router) {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    if (this.formLogin.valid) {
      const usuario: User = {
        id: 0,
        name: '',
        userName: '',
        email: this.formLogin.value.email,
        address: '',
        phone: '',
        type: '',
        password: this.formLogin.value.password,
      };

      this.http.post(usuario).subscribe(
        (user: any) => {
          console.log('Usuario autenticado:', user);
          this.router.navigate(['/category']);
        },
        (error) => {
          console.error('Error al iniciar sesión:', error);
        }
      );
    } else {
      console.log('fallo');
    }
  }
}
