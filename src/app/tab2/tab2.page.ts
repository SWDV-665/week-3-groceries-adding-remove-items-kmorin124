import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Butter",
      quantity: 4
    },    
    {
      name: "Ice Cream",
      quantity: 3
    }
  ];

  constructor(public toastController: ToastController, public alertController: AlertController) {}

  async removeItem(item, index) {
    console.log("Removing Item - ", index, item)
    const toast = await this.toastController.create({
      message: 'Removing ' + item.name + "...",
      duration: 3000
    });
    toast.present();
    this.items.splice(index, 1)
  }

  async addItem() {
    console.log("Adding Item -");
    this.addItemPrompt()
  }

  async addItemPrompt() {
    const alert = await this.alertController.create({
      header: 'Add grocery item...',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Item'
        },
        {
          name: 'quantity',
          type: 'number',
          placeholder: 'Quantity'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: item => {
            console.log('Item added -', item);
            this.items.push(item)
          }
        }
      ]
    });

    await alert.present();
  }

}
