import '../Style/App.css';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import Todos from './components/Todos';
import AuthContextProvider from './contexts/AuthContext';
import ThemeContextProvider from './contexts/ThemeContext';
import TodoContextProvider from './contexts/TodoContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar></Navbar>
          <TodoContextProvider>
            <Todos></Todos>
          </TodoContextProvider>
        </AuthContextProvider>
        <ThemeToggle></ThemeToggle>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
