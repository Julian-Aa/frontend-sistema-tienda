import { Component } from '@angular/core';
import { CreateProviderService } from '../create-provider/create-provider.service';
import { Provider } from '../create-provider/provider.model';
import { ActivatedRoute, Router } from '@angular/router';

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
    // Verifica si idParam tiene un valor antes de intentar convertirlo a número
    if (idParam !== null) {
      this.proveedor.idProveedor = +idParam; // Convierte el valor a número
      console.log('ID del usuario:', this.proveedor.idProveedor);
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
          this.router.navigate(['/provider/create-provider']);
        },
        (error) => {
          console.error('Error al actualizar el perfil:', error);
        }
      );
    console.log('Perfil actualizado:', this.proveedor);
  }
}
