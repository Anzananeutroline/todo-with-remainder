import './App.css';
import Todo from './Components/Todo/Todo';
import { TodoProvider } from './TodoContext';

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Todo />
        </TodoProvider>
    </div>
  );
}

export default App;
