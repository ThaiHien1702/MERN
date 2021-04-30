import '../Style/App.css';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import Todos from './components/Todos';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar></Navbar>
        <Todos></Todos>
        <ThemeToggle></ThemeToggle>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
