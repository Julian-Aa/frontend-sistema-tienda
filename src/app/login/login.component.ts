import { Component } from '@angular/core';
import { AuthService } from './auth.service'; // Importa el servicio de autenticación

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData: any = {}; // Objeto para almacenar las credenciales de inicio de sesión

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.loginData).subscribe(
      (response) => {
        console.log('Inicio de sesión exitoso:', response);
        // Puedes redirigir al usuario a otra página después del inicio de sesión exitoso.
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
        // Maneja el error aquí, muestra un mensaje de error o realiza acciones necesarias.
      }
    );
  }
}
