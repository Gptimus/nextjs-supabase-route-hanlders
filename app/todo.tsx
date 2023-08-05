"use client";

import { useRouter } from "next/navigation";
export type TodoType = {
  id: string;
  title: string;
  is_completed: boolean;
  created_at: string;
  user_id: string;
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
    <div className="my-3">
      <button
        className="bg-purple-800 hover:bg-purple-800/90 duration-300 w-full py-4 rounded-lg"
        onClick={handleSubmit}
      >
        {todo.title}
      </button>
    </div>
  );
};
