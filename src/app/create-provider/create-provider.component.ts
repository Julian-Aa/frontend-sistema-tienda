import { Component } from '@angular/core';
import { CreateProviderService } from './create-provider.service';
import { Provider } from './provider.model';

@Component({
  selector: 'app-create-provider',
  templateUrl: './create-provider.component.html',
  styleUrls: ['./create-provider.component.css'],
})
export class CreateProviderComponent {
  newProvider: any = {};
  errorMessage: string = '';
  selectedProviderId: number | null = null; // Almacena el ID del proveedor seleccionado
  constructor(private providerService: CreateProviderService) {}

  addProvider() {
    this.providerService.createProvider(this.newProvider).subscribe(
      (response) => {
        console.log('proveedor registrado exitosamente:', response);
      },
      (error) => {
        console.error('Error al registrar proveedor:', error);
        if (error.error === 'El correo electrónico ya existe.') {
          this.errorMessage =
            'El correo electrónico ya está en uso. Por favor, elige otro.';
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
}
