import { Injectable } from '@angular/core';
import { Noticia } from '../data/objs';

@Injectable({
    providedIn: 'root'
})
export class DadosNoticiasService {

    noticiasLista: Noticia[] = [];

    constructor() {
        this.noticiasLista.push(
            {
                imagem: "data:image/jpeg;base64,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",
                titulo: "titulo 1",
                descricao: "descricao 1",
                dataFim: new Date(2025, 11, 20)
            });

        this.noticiasLista.push(
            {
                imagem: "data:image/jpeg;base64,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",
                titulo: "titulo 2",
                descricao: "descricao 2",
                dataFim: new Date(2022, 11, 9)
            });

        this.noticiasLista.push(
            {
                imagem: "data:image/jpeg;base64,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",
                titulo: "titulo 3",
                descricao: "descricao 3",
                dataFim: new Date(2024, 0, 19)
            });

        this.noticiasLista.push(
            {
                imagem: "data:image/jpeg;base64,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",
                titulo: "titulo 4",
                descricao: "descricao 4",
                dataFim: new Date(2024, 11, 30)
            });
    }

    getNoticias() {

        const dataDeCorte = new Date();
        dataDeCorte.setTime(dataDeCorte.getTime() - 86400000);

        let noticiasEmVigor = this.noticiasLista.filter((x) => x.dataFim >= dataDeCorte)
            .sort((a, b) => a.dataFim.getTime() - b.dataFim.getTime());

        return noticiasEmVigor;

    }
}
