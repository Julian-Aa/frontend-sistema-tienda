import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  newUser: any = {}; // Objeto para almacenar los datos del nuevo usuario
  errorMessage: string = ''; // Define la propiedad errorMessage

  constructor(private registerService: RegisterService, private router: Router) {}

  createUser() {
    this.registerService.createUser(this.newUser).subscribe(
      (response) => {
        console.log('Usuario creado exitosamente:', response);
        this.router.navigate(['/auth/login'])
      },
      (error) => {
        console.error('Error al crear usuario:', error);
        if (error.error === 'El correo electrónico ya existe.') {
          this.errorMessage =
            'El correo electrónico ya está en uso. Por favor, elige otro.';
        } else if (error.error === 'El usuario ya existe.') {
          this.errorMessage =
            'El nombre de usuario ya está en uso. Por favor, elige otro.';
        }
      }
    );
  }
}
