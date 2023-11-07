import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { RegisterService } from 'src/app/auth/register/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent {
  newUser: any = {};
  errorMessage: string = '';

  constructor(
    private registerService: RegisterService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.newUser.id = +idParam;
      console.log('ID del usuario:', this.newUser.id);
      this.registerService.getById(this.newUser.id).subscribe((data) => {
        this.newUser = data;
      });
    } else {
      console.log('El parámetro "id" no está presente en la URL');
    }
  }
  editUser() {
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

    this.registerService.saveProfile(this.newUser.id, this.newUser).subscribe(
      (response) => {
        console.log('Usuario editado exitosamente:', response);
        Swal.fire({
          icon: 'success',
          title: 'Usuario editado',
          text: 'El usuario se ha editado con éxito.',
        }).then(() => {
        });
      },
      (error) => {
        console.error('Error al editar usuario:', error);
        if (error.error === 'El correo electrónico ya existe.') {
          Swal.fire({
            icon: 'error',
            title: 'Error al editar',
            text: 'El correo electrónico ya existe.',
          });
        }
      }
    );
  }
}
