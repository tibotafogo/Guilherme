import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { FilmeService } from '../services/filme.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  type: string = "pending"

  constructor(public alertController: AlertController, public filmeService: FilmeService, public toastController: ToastController) {}

  async adicionandoShow() {
    const alert = await this.alertController.create({
      header: 'Adicionar Filme',
      inputs: [
        {
          name: 'filme',
          type: 'text',
          placeholder: 'Filme'
        },
        {
          name: 'date',
          type: 'date',
          min: '2023-01-01',
          max: '2025-12-31'
        },
        {
          name: 'genero',
          type: 'text',
          placeholder: 'Genero'
        }
        
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Salvar',
          handler: (alertData) => {
            if (alertData.filme != "") {
              this.filmeService.addFilmes(alertData.filme, alertData.date, alertData.genero);
            }
            else {
              this.torradaPresente();
              this.adicionandoShow();
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async delShow(index: number) {
    const alert = await this.alertController.create({
      header: 'Deletar filme',
      message: "Deseja mesmo excluir este filme?",
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Deletar',
          handler: () => {
              this.filmeService.rmvFilmes(index);
          }
        }
      ]
    });

    await alert.present();
  }

  async updateShow(index: number, filme: any, genero: any){
    const alert = await this.alertController.create({
      header: 'Atualizar Filme',
      inputs:[
        {
          name: 'filme',
          type: 'text',
          placeholder: 'Filme',
          value: filme.value
        },
        {
          name: 'date',
          type: 'date',
          min: '2023-01-01',
          max: '2025-12-31',
          value: filme.date.getFullYear() + "-" + ((filme.date.getMonth()+1) < 10 ? "0" + filme.date.getMonth()+1 : filme.date.getMonth()+1) + "-" + ((filme.date.getDay()+1)< 10 ? "0" + filme.date.getDay() : filme.date.getDay())
        },
        {
          name: 'genero',
          type: 'text',
          placeholder: 'Genero',
          value: genero.value
        }
      ],
      buttons:[
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Atualizar',
            handler: (alertData) => {
              if (alertData.filme != "") {
                this.filmeService.alterarFilmes(index, alertData.filme, alertData.date, alertData.genero);
              }
              else {
                this.torradaPresente();
                this.updateShow(index, filme, genero);
              }
            }
        }
      ]
    });
    await alert.present();
  }

  async torradaPresente() {
    const toast = await this.toastController.create({
      message: "Preencha as áreas em branco!",
      duration: 2000
    });
    await toast.present();
  }
}

