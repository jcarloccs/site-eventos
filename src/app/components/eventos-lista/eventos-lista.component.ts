import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eventos-lista',
  standalone: true,
  imports: [],
  templateUrl: './eventos-lista.component.html',
  styleUrl: './eventos-lista.component.css'
})

export class EventosListaComponent {

  @Input() imagem: string = "";
  @Input() titulo: string = "";

}
