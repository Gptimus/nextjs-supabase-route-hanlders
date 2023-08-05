"use client";

import { useSupabase } from "./superbase-context";

export const Login = () => {
  const { supabase } = useSupabase();
  const signUp = () => {
    supabase.auth.signUp({
      email: "guerthmanzala@gmail.com",
      password: "12345678",
    });
  };

  const signIn = () => {
    supabase.auth.signInWithPassword({
      email: "guerthmanzala@gmail.com",
      password: "12345678",
    });
  };

  const signOut = () => {
    supabase.auth.signOut();
  };

  return (
    <div className="justify-end flex text-white gap-4 my-6 mr-7">
      <button
        className="text-sm text-purple-600 hover:text-purple-600/90 duration-200"
        onClick={signUp}
      >
        Sign Up
      </button>
      <button
        className="text-sm text-purple-600 hover:text-purple-600/90 duration-200"
        onClick={signIn}
      >
        Sign In
      </button>
      <button
        className="text-sm text-purple-600 hover:text-purple-600/90 duration-200"
        onClick={signOut}
      >
        Sign Out
      </button>
    </div>
  );
};
