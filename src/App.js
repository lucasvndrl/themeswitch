import TodoList from './components/TodoList'
import ThemeProvider from './styles/themes/context'

function App() {
  return (
      <ThemeProvider>
        <TodoList />
      </ThemeProvider>
  );
}

export default App;
