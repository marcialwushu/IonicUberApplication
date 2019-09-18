import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform, LoadingController } from '@ionic/angular';
import { Environment } from '@ionic-native/google-maps';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('map') mapElement: any;
  private loading: any;

  constructor(
    private platform: Platform,
    private loadingCtrl: LoadingController
    ) {}

  ngOnInit() {
    this.mapElement = this.mapElement.nativeElement;

    this.mapElement.style.width = this.platform.width() + 'px';
    this.mapElement.style.height = this.platform.height() + 'px';

    this.loadMap();

  }

  async loadMap() {
    this.loading = await this.loadingCtrl.create({ message: 'Por favor aguarde...' });
    await this.loading.present();

    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': '(your api key for `https://`)',
      'API_KEY_FOR_BROWSER_DEBUG': '(your api key for `http://`)'
    })
  }

}
