import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle
   } from '@ionic/angular/standalone';
  import { Router, RouterModule } from '@angular/router';
  import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonContent,
    CommonModule,
    FormsModule,
    IonButton,
    IonHeader,
  IonToolbar,
  IonTitle,
    RouterModule]
})
export class DashboardPage  {

  constructor(private router: Router,private authService: AuthService) {}

  async logout() {
    try {
      await this.authService.logOut();
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }
  
  asignarDificultad(dificultad:string){
    this.router.navigate(['/'+ dificultad]);
  }

  
}
