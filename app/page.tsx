export const revalidate = 0;

const Home = async () => {
  const response = await fetch("http://localhost:3000/api/todos", {
    cache: "no-cache",
  });
  const todos = await response.json();
  return <pre>{JSON.stringify(todos, null, 2)}</pre>;
};

export default Home;
