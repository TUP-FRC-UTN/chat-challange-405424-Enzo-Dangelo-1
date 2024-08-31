import { Component } from '@angular/core';
import { UsuarioComponent } from '../usuario/usuario.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [UsuarioComponent, FormsModule],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {

  mensajes: {usuario: string, mensaje: string}[] = [];

  recibirMensaje(evento: {usuario: string, mensaje: string}) {
    this.mensajes.push(evento);
  }

}
