import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: LoginService) {}

  onSubmit() {
    // Llama al servicio de autenticación para intentar iniciar sesión
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        // Maneja la respuesta exitosa, por ejemplo, redirecciona al usuario a una página de inicio.
        console.log('Inicio de sesión exitoso', response);
        // Puedes redirigir al usuario a una página de inicio aquí.
      },
      (error: any) => {
        // Maneja los errores, por ejemplo, muestra un mensaje de error al usuario.
        console.error('Error durante el inicio de sesión', error);
        this.errorMessage = 'Nombre de usuario o contraseña incorrectos';
      }
    );
  }
}
