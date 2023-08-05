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
        className="bg-purple-700 hover:bg-purple-700/90 duration-300 py-3 px-5 rounded-md text-xs"
        onClick={signUp}
      >
        Sign Up
      </button>
      <button
        className="bg-purple-700 hover:bg-purple-700/90 duration-300 py-3 px-5 rounded-md text-xs"
        onClick={signIn}
      >
        Sign In
      </button>
      <button
        className="bg-purple-700 hover:bg-purple-700/90 duration-300 py-3 px-5 rounded-md text-xs"
        onClick={signOut}
      >
        Sign Out
      </button>
    </div>
  );
};
