"use client";

import { useRouter } from "next/navigation";
export type TodoType = {
  id: string;
  title: string;
  is_completed: boolean;
  created_at: string;
};

export const Todo = ({ todo }: { todo: TodoType }) => {
  const router = useRouter();

  const handleSubmit = async () => {
    await fetch("http://localhost:3000/api/todos", {
      method: "PUT",
      body: JSON.stringify({ id: todo.id }),
    });

    router.refresh();
  };
  return (
    <p>
      <button onClick={handleSubmit}>{todo.title}</button>
    </p>
  );
};
