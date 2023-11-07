import { Component, Input } from '@angular/core';
import { RegisterService } from '../auth/register/register.service';
import { ActivatedRoute } from '@angular/router';
import { Utils } from '../core/utils/utils';
import { ProductoService } from '../product/services/product.service';

@Component({
  selector: 'app-compra-realizada',
  templateUrl: './compra-realizada.component.html',
  styleUrls: ['./compra-realizada.component.css'],
})
export class CompraRealizadaComponent {
  @Input() productoComprado: any;
  @Input() cantidadComprada!: number;
  @Input() totalCompra!: number;
  @Input() direccion: any;
  newUser: any = {};
  producto: any = {};
  idProducto!: number;
  constructor(
    private registerService: RegisterService,
    private productosService: ProductoService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const idParam = Utils.getIdUsuario();
    console.log(idParam);
    if (idParam !== null) {
      this.newUser.id = +idParam;
      console.log('ID del usuario:', this.newUser.id);
      this.registerService.getById(this.newUser.id).subscribe((data) => {
        this.newUser = data;
      });
    } else {
      console.log('El parámetro "id" no está presente en la URL');
    }

    this.route.params.subscribe((params) => {
      this.idProducto = +params['id'];
    });
    this.productosService.getByIdProducto(this.idProducto).subscribe((producto: any) => {
      this.producto = producto;
      console.log(this.producto);
    });
  }
}
