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

  public alterarFilmes(index: number, value: string, date: string, genero: string){
    let filme: Filmes = this.filme[index]
    filme.value = value;
    date = date.replace("-", "/");
    filme.date = new Date(date);
    filme.genero = genero
    this.filme.splice (index, 1, filme);
  }

  public rmvFilmes(index: number){
    this.filme.splice(index, 1);
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

/* Pergunta 2 dia 11: Uma função Assíncrona não precisa esperar que uma ação finalize para continuar, ela funciona em segundo plano, diferentemente das funções Síncronas */

/* Pergunta 1 dia 14: Uma diretiva é compilada assim que o Angular é ativado, eles funcionam como no html ou Javascript normal. Porém tendo o "ng", mostrando que é do próprio Angular, ngif sendo "se uma
confição acontecer, faça isso, se não faça outra, no caso uma condição para remover algo ou não do DOM. O NgFor é o que permite uma interação com alguma array */