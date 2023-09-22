import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent {
  usuario: any = {
    nombre: '',
    email: '',
    contrasena: ''
  };

  /*crearUsuario(): void {
    // Aquí puedes enviar la información al servidor o realizar la lógica de creación de usuario
    console.log('Usuario creado:', this.usuario);
    return this.http.post(this.apiUrl + '/usuarios', usuario);
  }*/
}
