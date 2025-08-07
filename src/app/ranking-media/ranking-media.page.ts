import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonList,IonLabel,IonItem, IonItemDivider } from '@ionic/angular/standalone';
import { supabase } from '../supabase.client';

@Component({
  selector: 'app-ranking-media',
  templateUrl: './ranking-media.page.html',
  styleUrls: ['./ranking-media.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonList,IonLabel,IonItem, IonItemDivider]
})
export class RankingMediaPage implements OnInit {

  topGameResults: any[] = [];
  
  topMedia: any[] = [];
  

  async ngOnInit() {
      // Obtén todos los gameResults de la base de datos
      const { data: gameResults, error } = await supabase
        .from('game_results')
        .select(`
          elapsed_time,
          date_played,
          dificultad,
          users(perfil)`)
        .order('elapsed_time', { ascending: true });
  
      if (error) {
        console.error('Error al obtener resultados del juego:', error);
      } else {
        const filteredResults = gameResults || [];
  
  
        this.topMedia = filteredResults
          .filter(r => r.dificultad === 'Media')
          .slice(0, 5);
  
        
      }
    }


}
