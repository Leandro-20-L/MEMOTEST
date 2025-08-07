import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonList,IonLabel,IonItem, IonItemDivider,} from '@ionic/angular/standalone';

import { supabase } from '../supabase.client';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-top',
  templateUrl: './top.page.html',
  styleUrls: ['./top.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule,RouterModule,IonContent]
})
export class TopPage   {

  
  }


