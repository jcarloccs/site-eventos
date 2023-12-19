import { Component } from '@angular/core';
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { EventosAgoraComponent } from "../../components/eventos-agora/eventos-agora.component";
import { EventosListaComponent } from "../../components/eventos-lista/eventos-lista.component";
import { Noticia } from '../../data/objs';
import { NgFor } from '@angular/common';
import { DadosNoticiasService } from '../../services/dados-noticias.service'

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MenuBarComponent, EventosAgoraComponent, EventosListaComponent, NgFor]
})
export class HomeComponent {

    noticiasLista: Noticia[] = [];

    constructor(private dadosNoticiasService: DadosNoticiasService) {
        this.noticiasLista = dadosNoticiasService.getNoticias();
    }
}
