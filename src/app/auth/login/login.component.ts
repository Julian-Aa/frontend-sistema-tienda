import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { User } from '../../core/models/user.model';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

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
    lastName: '',
    email: '',
    address: '',
    phone: '',
    rol: '',
    password: '',
  };
  constructor(private http: LoginService, private router: Router) {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }
  ngOnInit(): void {
    sessionStorage.clear();
  }
  login() {
    const email = this.formLogin.value.email;
    const password = this.formLogin.value.password;
  
    if (email && password) {
      const usuario: User = {
        id: 0,
        name: '',
        lastName: '',
        email: email,
        address: '',
        phone: '',
        rol: '',
        password:password,
      };
  
      this.http.post(usuario).subscribe(
        (user: any) => {
          sessionStorage.setItem('user', JSON.stringify(user));
          console.log(user.id)
          this.router.navigate(['/main/listar-productos']);
        },
        (error) => {
          console.error('Error al iniciar sesión:', error);
          Swal.fire({
            icon: 'error',
            title: 'Inicio de sesión fallido',
            text: 'Verifica tus credenciales e intenta nuevamente.',
          });
        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Campos vacíos',
        text: 'Por favor, completa ambos campos (correo y contraseña).',
      });
    }
  }

}
