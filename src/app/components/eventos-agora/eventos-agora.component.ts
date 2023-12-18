import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eventos-agora',
  standalone: true,
  imports: [],
  templateUrl: './eventos-agora.component.html',
  styleUrl: './eventos-agora.component.css'
})
export class EventosAgoraComponent {
  
  @Input() imagem: string = "";
  @Input() titulo: string = "";
  @Input() descricao: string = "";

}
