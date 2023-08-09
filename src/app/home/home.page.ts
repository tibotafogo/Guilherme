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

  async presentAlertPromptAdd() {
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
              this.presentToast();
              this.presentAlertPromptAdd();
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "Preencha as áreas!",
      duration: 2000
    });
    await toast.present();
  }
}

