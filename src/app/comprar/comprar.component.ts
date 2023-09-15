import { Component, OnInit, numberAttribute } from '@angular/core';
import { Producto } from 'src/app/product/product.model';
import { ActivatedRoute } from '@angular/router';
import { ComprarService } from './comprar.service';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css'],
})
export class ComprarComponent implements OnInit {
  id: number;
  producto!: Producto;
  constructor(
    private comprarService: ComprarService,
    private route: ActivatedRoute
  ) {
    this.id = 0;
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.comprarService.getById(this.id).subscribe((producto:any) => {
      this.producto = producto;
    });
  }
}
