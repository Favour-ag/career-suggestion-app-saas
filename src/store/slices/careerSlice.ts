import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { supabase } from '../../lib/supabase';
import { CareerMatch } from '../../types';

interface CareerState {
  matches: CareerMatch[];
  selectedCareer: CareerMatch | null;
  learningProgress: any[];
  loading: boolean;
  error: string | null;
}

const initialState: CareerState = {
  matches: [],
  selectedCareer: null,
  learningProgress: [],
  loading: false,
  error: null,
};

export const saveCareerMatches = createAsyncThunk(
  'career/saveCareerMatches',
  async ({ userId, matches }: { userId: string; matches: CareerMatch[] }, { rejectWithValue }) => {
    try {
      const careerMatchData = matches.map(match => ({
        user_id: userId,
        career_id: match.id,
        match_percentage: match.matchPercentage
      }));

      const { data, error } = await supabase
        .from('career_matches')
        .insert(careerMatchData)
        .select();
      
      if (error) throw error;
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const loadCareerMatches = createAsyncThunk(
  'career/loadCareerMatches',
  async (userId: string, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase
        .from('career_matches')
        .select('*')
        .eq('user_id', userId)
        .order('match_percentage', { ascending: false });
      
      if (error) throw error;
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const saveLearningProgress = createAsyncThunk(
  'career/saveLearningProgress',
  async (progressData: any, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase
        .from('learning_progress')
        .upsert(progressData)
        .select();
      
      if (error) throw error;
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const careerSlice = createSlice({
  name: 'career',
  initialState,
  reducers: {
    setMatches: (state, action: PayloadAction<CareerMatch[]>) => {
      state.matches = action.payload;
    },
    selectCareer: (state, action: PayloadAction<CareerMatch>) => {
      state.selectedCareer = action.payload;
    },
    clearMatches: (state) => {
      state.matches = [];
      state.selectedCareer = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveCareerMatches.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(saveCareerMatches.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(saveCareerMatches.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(loadCareerMatches.fulfilled, (state, action) => {
        // Transform database data back to CareerMatch format
        // This would need to be implemented based on your data structure
      });
  },
});

export const { setMatches, selectCareer, clearMatches } = careerSlice.actions;
export default careerSlice.reducer;