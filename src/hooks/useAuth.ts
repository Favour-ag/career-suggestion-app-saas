import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { supabase } from '../lib/supabase';
import { setUser, fetchProfile } from '../store/slices/authSlice';
import type { RootState, AppDispatch } from '../store/store';

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, profile, loading, error } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      dispatch(setUser(session?.user ?? null));
      if (session?.user) {
        dispatch(fetchProfile(session.user.id));
      }
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      dispatch(setUser(session?.user ?? null));
      if (session?.user) {
        dispatch(fetchProfile(session.user.id));
      }
    });

    return () => subscription.unsubscribe();
  }, [dispatch]);

  return {
    user,
    profile,
    loading,
    error,
    isAuthenticated: !!user,
  };
};