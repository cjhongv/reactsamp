import Form from './components/Form';
import Header from './components/Header';
import TodoList from './components/TodoList';
import TodoContextProvider from './contexts/TodoContext';

function App() {
  return (
    <TodoContextProvider>
      <Header />
      <Form />
      <TodoList />
    </TodoContextProvider>
  );
}

export default App;
