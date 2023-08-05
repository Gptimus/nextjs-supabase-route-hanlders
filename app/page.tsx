import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Login } from "./login";
import { NewTodo } from "./new-todo";
import { Todo, TodoType } from "./todo";

export const revalidate = 0;

const Home = async () => {
  const supabase = createServerComponentClient({
    cookies,
  });
  const { data } = await supabase
    .from("todos")
    .select()
    .match({ is_completed: false });

  const todos = data as TodoType[];

  return (
    <>
      <Login />

      <div className="flex justify-center items-center h-[100vh]">
        <div className="items-center">
          <div className="mb-7">
            <h1 className="font-bold text-4xl text-slate-300">
              What I need to do today !
            </h1>
          </div>
          <NewTodo />
          {todos.map((todo: TodoType) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
