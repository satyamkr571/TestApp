import "./App.css";
import Button from "./component/button/button";
import Todo from "./component/todo/todo";

function App() {
  const todos = [
    { id: "1", title: "Watch Movie", completed: false },
    { id: "2", title: "Cook Food", completed: true },
    { id: "3", title: "Take Rest", completed: true },
    { id: "4", title: "Play Cricket", completed: true },
    { id: "5", title: "Play Football", completed: false },
    { id: "6", title: "Learn React", completed: true },
    { id: "7", title: "Learn GraphQL", completed: false },
  ];
  return (
    <div className="App">
      <Button label="Button"></Button>
      {todos.map((todo, index) => {
        return <Todo key={index} todo={todo} />;
      })}
    </div>
  );
}

export default App;
