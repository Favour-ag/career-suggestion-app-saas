import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          avatar_url: string | null;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          avatar_url?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
      };
      quiz_responses: {
        Row: {
          id: string;
          user_id: string;
          responses: any;
          completed_at: string | null;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          responses: any;
          completed_at?: string | null;
          created_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          responses?: any;
          completed_at?: string | null;
          created_at?: string | null;
        };
      };
      career_matches: {
        Row: {
          id: string;
          user_id: string;
          career_id: string;
          match_percentage: number;
          created_at: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          career_id: string;
          match_percentage: number;
          created_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          career_id?: string;
          match_percentage?: number;
          created_at?: string | null;
        };
      };
      learning_progress: {
        Row: {
          id: string;
          user_id: string;
          career_id: string;
          skill_name: string;
          current_level: number;
          target_level: number;
          resources_completed: string[] | null;
          created_at: string | null;
          updated_at: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          career_id: string;
          skill_name: string;
          current_level: number;
          target_level: number;
          resources_completed?: string[] | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          career_id?: string;
          skill_name?: string;
          current_level?: number;
          target_level?: number;
          resources_completed?: string[] | null;
          created_at?: string | null;
          updated_at?: string | null;
        };
      };
    };
  };
};