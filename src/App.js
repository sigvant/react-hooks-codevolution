import './App.css';
import FocusInput from './components/FocusInput';
import HookTimer from './components/HookTimer';
import Timer from './components/Timer';

function App() {
  return (
      <div className="App">
        <FocusInput/>
        <Timer/>
        <HookTimer/>
      </div>
  );
}

export default App;