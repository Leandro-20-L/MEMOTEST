import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  IonContent,
  IonInput,
  IonButton,
  
   } from '@ionic/angular/standalone';
  import { Router, RouterModule } from '@angular/router';
  import { supabase } from '../supabase.client';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent,

    CommonModule,
    FormsModule,
    IonInput,
    
    IonButton,
    RouterModule],
})
export class HomePage  {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  phone: string = '';

  constructor(private router: Router) {}

  async login() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: this.email,
      password: this.password,
    });

    console.log('Login response:', data);
    console.log('Login error:', error);

    if (error) {
      this.errorMessage = 'Credenciales inválidas';
      console.error(error.message);
    } else {
      this.errorMessage = '';
      this.router.navigate(['/dashboard']);
    }
  }

  LlenarUsers(mail:string, pass:string){
    this.email=mail;
    this.password=pass

  }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.email = '';
    this.password = '';
    this.errorMessage = '';
  }
}
