import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  private filme: Filmes[] = [];

  constructor() { }

  public getFilmes(): Filmes[]{
    return this.filme;
  }

  public addFilmes(value: string, date: string, genero: string){
    date = date.replace("-", "/");
    let filme: Filmes = {value: value, date: new Date(date), genero: genero, done: false};
    this.filme.push(filme);
    console.log(this.filme);
  }

}

interface Filmes{
  value: string;
  date: Date;
  genero: string;
  done?:boolean;
}

/* Pergunta 1 dia 8: O principal objetivo dos serviços são compartilhar dados entre os programas, ou seja, em relação ao usuário, ele passa o valor
e é assim compartilhado pras outras*/

/* Pergunta 1 dia 11: A diferença entre Função e Método é que a função é associada a um objeto/classe, já o método não é associado a nada. Sua
relação se dá quando os dois precisam se comunicar para fazer a interfae funcionar como devia */

/* Pergunta 2 dia 11: Uma função Assíncrona não precisa esperar que uma ação finalize para continuar, diferentemente das funções Sícronas */