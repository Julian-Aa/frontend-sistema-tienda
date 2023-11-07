import { Component } from '@angular/core';
import { CreateProviderService } from './create-provider.service';
import { Provider } from '../../../core/models/provider.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-provider',
  templateUrl: './create-provider.component.html',
  styleUrls: ['./create-provider.component.css'],
})
export class CreateProviderComponent {
  newProvider: any = {};
  providers: any[] = [];
  mensajeError: string = '';
  selectedProviderId: number | null = null;
  proveedorAgregado: boolean = false;
  errorCreacion: boolean = false;
  proveedorSeleccionado: any;
  constructor(
    private router: Router,
    private providerService: CreateProviderService
  ) {}
  ngOnInit(): void {
    this.loadProviders();
  }
  loadProviders() {
    this.providerService.getProvider().subscribe((data) => {
      this.providers = data;
    });
  }
  addProvider() {
    this.providerService.createProvider(this.newProvider).subscribe(
      (response) => {
        console.log('proveedor registrado exitosamente:', response);
        this.newProvider = {};
        this.proveedorAgregado = true;
        this.loadProviders();
      },
      (error) => {
        console.error('Error al registrar proveedor:', error);
        if (error.error === 'El correo electrónico ya existe.') {
          this.mensajeError =
            'El correo electrónico ya está en uso. Por favor, elige otro.';
          this.errorCreacion = true;
        }
      }
    );
  }
  getSelectedProvider(): Provider | null {
    if (this.selectedProviderId !== null) {
      return (
        this.newProvider.find(
          (provider: any) => provider.id === this.selectedProviderId
        ) || null
      );
    }
    return null;
  }
  editarProveedor(proveedor: any) {
    this.router.navigate(['/main/provider/edit-provider/' + proveedor.idProveedor]);
  }

  eliminarProveedor(proveedor: any) {
    Swal.fire({
      title: `¿Estás seguro de que deseas eliminar el proveedor "${proveedor.name}"?`,
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.providerService.delete(proveedor.idProveedor).subscribe(
          () => {
            Swal.fire(
              'Eliminado',
              'El proveedor ha sido eliminado con éxito.',
              'success'
            );
            this.loadProviders();
          },
          (error) => {
            console.error('Error al eliminar el proveedor:', error);
            Swal.fire(
              'Error',
              'Hubo un problema al eliminar el proveedor.',
              'error'
            );
          }
        );
      }
    });
  }
  cerrarConfirmacion() {
    this.proveedorAgregado = false;
  }
  cerrarError() {
    this.errorCreacion = false;
  }
}
