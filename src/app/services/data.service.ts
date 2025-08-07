import { Injectable } from '@angular/core';
import { supabase } from '../supabase.client';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  async saveGameResult(uid_user: string, elapsedTime: number, dificultad: string) {
    const formattedDate = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    
    console.log(uid_user);
    console.log(elapsedTime);
    console.log(dificultad);
    console.log();

    const { data, error } = await supabase
      .from('game_results')
      .insert([
        {
          uid_user,              // ✅ foreign key
          elapsed_time: elapsedTime,   // ✅ con guión bajo
          date_played: formattedDate,  // ✅ nombre correcto
          dificultad,            // ✅ igual que en la tabla
        },
      ]) .select();;
  
    if (error) {
      console.error('Error al guardar el resultado:', error.message);
    } else {
      console.log('Resultado guardado:', data);
    }
  }

  public async getUserNameByUID(UIDUser: string): Promise<string> {
    const { data, error } = await supabase
      .from('users')
      .select('uid')
      .eq('uid', UIDUser)
      .single(); // Esperamos solo un resultado
  
    if (error) {
      console.error('Usuario no encontrado:', error.message);
      return '';
    }
  
    return data.uid;
  }
  
  async getGameResults() {
    const { data, error } = await supabase
      .from('gameResults')
      .select('*');
  
    if (error) {
      console.error('Error al obtener los resultados:', error.message);
      return [];
    }
  
    return data;
  }
}
