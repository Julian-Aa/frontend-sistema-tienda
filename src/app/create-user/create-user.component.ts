import { Component } from '@angular/core';
import { UserService } from './user.service'; // Importa tu servicio de usuario aquí

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  newUser: any = {}; // Objeto para almacenar los datos del nuevo usuario
  errorMessage: string = ''; // Define la propiedad errorMessage

  constructor(private userService: UserService) {}

  createUser() {
    this.userService.createUser(this.newUser).subscribe(
      (response) => {
        console.log('Usuario creado exitosamente:', response);
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
