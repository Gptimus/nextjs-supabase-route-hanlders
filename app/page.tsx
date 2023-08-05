import { NewTodo } from "./new-todo";
import { Todo, TodoType } from "./todo";

export const revalidate = 0;

const Home = async () => {
  const response = await fetch("http://localhost:3000/api/todos", {
    cache: "no-cache",
  });
  const todos: TodoType[] = await response.json();
  return (
    <>
      <NewTodo />
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default Home;
