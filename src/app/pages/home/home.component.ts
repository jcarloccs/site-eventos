import { Component } from '@angular/core';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { EventosAgoraComponent } from "../../components/eventos-agora/eventos-agora.component";
import { EventosListaComponent } from "../../components/eventos-lista/eventos-lista.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MenuBarComponent, EventosAgoraComponent, EventosListaComponent]
})
export class HomeComponent {

}
