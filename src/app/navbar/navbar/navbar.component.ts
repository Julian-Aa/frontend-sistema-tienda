import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utils } from 'src/app/core/utils/utils';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  searchTerm = '';
  searchResults: any[] = [];
  mostrarOpciones = false;

  constructor(private route: Router) {}
  ngOnInit(): void {}
  mostrarOpcionesPerfil(event: Event) {
    event.stopPropagation(); // Detiene la propagación del evento para evitar que se cierre inmediatamente
    this.mostrarOpciones = !this.mostrarOpciones;
  }
  searchProducts() {
    this.route.navigate(['/search']);
  }
  editarPerfil() {
    let id = Utils.getIdUsuario();
    this.route.navigate(['main/user/edit-user/' + id]);
  }
  verListaDeseos() {}
  verHistorialCompras() {}
  cerrarSesion() {
    this.route.navigate(['auth/login']);
  }
}
