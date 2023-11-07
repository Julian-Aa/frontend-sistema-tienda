import { Component } from '@angular/core';
import { CreateProviderService } from '../create-provider/create-provider.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-provider',
  templateUrl: './edit-provider.component.html',
  styleUrls: ['./edit-provider.component.css'],
})
export class EditProviderComponent {
  proveedor: any = {};
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private createPorvider: CreateProviderService
  ) {}
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.proveedor.idProveedor = +idParam;
      this.createPorvider
        .getProviderByID(this.proveedor.idProveedor)
        .subscribe((data) => {
          this.proveedor = data;
        });
    } else {
      console.log('El parámetro "id" no está presente en la URL');
    }
  }
  guardarCambios() {
    this.createPorvider
      .put(this.proveedor.idProveedor, this.proveedor)
      .subscribe(
        (response) => {
          console.log('Perfil actualizado exitosamente:', response);
          Swal.fire('Éxito', 'Perfil actualizado exitosamente', 'success').then(
            () => {
              this.router.navigate(['/main/provider/create-provider']);
            }
          );
        },
        (error) => {
          console.error('Error al actualizar el perfil:', error);
          Swal.fire('Error', 'Hubo un error al actualizar el perfil', 'error');
        }
      );
  }
}
