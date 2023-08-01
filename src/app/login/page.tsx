'use client';
import LoginCard from '@/components/cards/LoginCard';
import { UserAuth } from '@/context/authContext';
import { redirect } from 'next/navigation';

const Login = () => {
  const { currentUser, googleSignIn, logout, isLoading } = UserAuth();
  const handleSignIn = () => {
    try {
      googleSignIn();
    } catch (error) {
      throw new Error('error');
    }
  };
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (currentUser) {
    redirect('/dashboard');
  }
  return (
    <>
      <LoginCard onClick={handleSignIn} />
    </>
  );
};

export default Login;
