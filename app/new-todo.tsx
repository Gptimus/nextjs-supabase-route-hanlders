"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export const NewTodo = () => {
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title } = Object.fromEntries(new FormData(e.currentTarget));

    await fetch(`http://localhost:3000/api/todos`, {
      method: "POST",
      body: JSON.stringify({ title }),
    });

    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" />
    </form>
  );
};
