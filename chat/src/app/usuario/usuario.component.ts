import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  @Input() nombre: string = '';
  @Output() mensajeEnviado = new EventEmitter<{usuario: string, mensaje: string}>();

  mensaje: string = '';

  enviarMensaje() {
    if(this.mensaje.trim()){
      this.mensajeEnviado.emit({usuario: this.nombre, mensaje: this.mensaje});
      this.mensaje = '';
    }
  }

}
