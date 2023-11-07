import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import Swal from 'sweetalert2';
import { User } from '../../core/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  newUser: User = {    
    id: 0,
    name: '',
    lastName: '',
    email: '',
    address: '',
    phone:'',
    rol: 'custom',
    password:'',
  };
  errorMessage: string = '';

  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}

  createUser() {
    if (
      !this.newUser.name ||
      !this.newUser.lastName ||
      !this.newUser.email ||
      !this.newUser.password
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Campos vacíos',
        text: 'Por favor, complete todos los campos.',
      });
      return;
    }

    this.registerService.createUser(this.newUser).subscribe(
      (response) => {
        console.log('Usuario registrado exitosamente:', response);
        Swal.fire({
          icon: 'success',
          title: 'Usuario registrado',
          text: 'El usuario se ha registrado con éxito.',
        }).then(() => {
          this.router.navigate(['auth/login']);
        });
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
        if (error.error === 'El correo electrónico ya existe.') {
          Swal.fire({
            icon: 'error',
            title: 'Error al registrar',
            text: 'El correo electrónico ya existe.',
          });
        }
      }
    );
    console.log('Usuario registrado:', this.newUser);
  }
}
