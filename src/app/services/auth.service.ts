import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment';
import { supabase } from '../supabase.client';

// Reemplazá con tus claves reales (o cargalas desde el environment)


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  

  constructor() {
    
  }

  public async logIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    return data;
  }

  public async logOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  }

  public async getUserUid(): Promise<string | null> {
    const { data, error } = await supabase.auth.getUser();
    if (error) return null;
    return data.user?.id || null;
  }

  public getSupabaseInstance(): SupabaseClient {
    return supabase;
  }

  public async insertarUsuarioSiNoExiste(uid: string) {
    const { data, error } = await supabase
      .from('users')
      .select('uid')
      .eq('uid', uid)
      .single();
  
    if (!data) {
      const { error: insertError } = await supabase
        .from('users')
        .insert({ uid: uid });
  
      if (insertError) {
        console.error('Error insertando usuario en tabla users:', insertError.message);
      } else {
        console.log('Usuario insertado en tabla users');
      }
    }
  }
}
