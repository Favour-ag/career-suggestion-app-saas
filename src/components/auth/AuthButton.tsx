import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '../ui/button';
import { signInWithGoogle, signOut } from '../../store/slices/authSlice';
import { useAuth } from '../../hooks/useAuth';
import { LogIn, LogOut, Loader2 } from 'lucide-react';
import type { AppDispatch } from '../../store/store';
import { toast } from 'sonner';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'; // Assuming you're using shadcn/ui

interface AuthButtonProps {
  className?: string;
}

export function AuthButton({ className }: AuthButtonProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { user, loading, error } = useAuth();
  const [isSigningIn, setIsSigningIn] = React.useState(false);
  const [isSigningOut, setIsSigningOut] = React.useState(false);

  const handleSignIn = async () => {
    try {
      setIsSigningIn(true);
      await dispatch(signInWithGoogle()).unwrap();
      toast.success('Signed in successfully');
    } catch (err) {
      console.error('Sign in failed:', err);
      toast.error('Failed to sign in. Please try again.');
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleSignOut = async () => {
    try {
      setIsSigningOut(true);
      await dispatch(signOut()).unwrap();
      toast.success('Signed out successfully');
    } catch (err) {
      console.error('Sign out failed:', err);
      toast.error('Failed to sign out. Please try again.');
    } finally {
      setIsSigningOut(false);
    }
  };

  React.useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  if (loading) {
    return (
      <Button variant="ghost" disabled className={className}>
        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
        Loading...
      </Button>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {user ? (
        <>
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage 
                src={user.user_metadata?.avatar_url} 
                alt={user.user_metadata?.name || 'User avatar'}
              />
              <AvatarFallback>
                {user.user_metadata?.name?.charAt(0) || 'U'}
              </AvatarFallback>
            </Avatar>
            <span className="hidden md:inline text-sm font-medium">
              {user.user_metadata?.name || 'User'}
            </span>
          </div>
          <Button 
            variant="ghost" 
            onClick={handleSignOut}
            disabled={isSigningOut}
            aria-label="Sign out"
            className="ml-2"
          >
            {isSigningOut ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <LogOut className="h-4 w-4" />
            )}
            <span className="ml-2 hidden sm:inline">
              {isSigningOut ? 'Signing out...' : 'Sign Out'}
            </span>
          </Button>
        </>
      ) : (
        <Button 
          onClick={handleSignIn}
          disabled={isSigningIn}
          aria-label="Sign in with Google"
        >
          {isSigningIn ? (
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          ) : (
            <LogIn className="h-4 w-4 mr-2" />
          )}
          Sign In with Google
        </Button>
      )}
    </div>
  );
}