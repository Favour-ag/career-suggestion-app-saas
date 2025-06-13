import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { supabase } from '../../lib/supabase';
import { QuizProgress, QuizAnswer } from '../../types';

interface QuizState {
  progress: QuizProgress;
  isCompleted: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: QuizState = {
  progress: {
    currentSection: 0,
    currentQuestion: 0,
    answers: {},
    completedSections: []
  },
  isCompleted: false,
  loading: false,
  error: null,
};

export const saveQuizResponse = createAsyncThunk(
  'quiz/saveQuizResponse',
  async ({ userId, responses }: { userId: string; responses: any }, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase
        .from('quiz_responses')
        .insert({
          user_id: userId,
          responses,
          completed_at: new Date().toISOString()
        })
        .select()
        .single();
      
      if (error) throw error;
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const loadQuizResponse = createAsyncThunk(
  'quiz/loadQuizResponse',
  async (userId: string, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase
        .from('quiz_responses')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(1)
        .single();
      
      if (error && error.code !== 'PGRST116') throw error;
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    updateProgress: (state, action: PayloadAction<Partial<QuizProgress>>) => {
      state.progress = { ...state.progress, ...action.payload };
    },
    updateAnswer: (state, action: PayloadAction<{ questionId: string; answer: QuizAnswer }>) => {
      state.progress.answers[action.payload.questionId] = action.payload.answer;
    },
    completeQuiz: (state) => {
      state.isCompleted = true;
    },
    resetQuiz: (state) => {
      state.progress = initialState.progress;
      state.isCompleted = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveQuizResponse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(saveQuizResponse.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(saveQuizResponse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(loadQuizResponse.fulfilled, (state, action) => {
        if (action.payload) {
          state.progress.answers = action.payload.responses;
          state.isCompleted = true;
        }
      });
  },
});

export const { updateProgress, updateAnswer, completeQuiz, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;