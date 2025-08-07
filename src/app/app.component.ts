import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { SplashScreen } from '@capacitor/splash-screen';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { CommonModule } from '@angular/common';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet,SplashScreenComponent,CommonModule],
})
export class AppComponent {
  showSplash: boolean = true;

  constructor() {
    this.initializeApp();
  }
  
  private async initializeApp() {
    await SplashScreen.hide(); // Oculta el splash nativo
    setTimeout(() => {
      this.showSplash = false; // Oculta el splash personalizado
    }, 2500); // Mismo tiempo que usás en el componente
    StatusBar.setOverlaysWebView({ overlay: false });
    
     StatusBar.setStyle({ style: Style.Default });
  }
}
