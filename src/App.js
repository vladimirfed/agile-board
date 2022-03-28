import './App.css';
import Board from './components/Board';
import Card from './components/Card';
import Column from './components/Column';
import TextForm from './components/TextForm';

function App() {
  return (
    <div className="App">
        <h1>App</h1>
        <Board />
        <Card />
        <Column />
        <TextForm />
    </div>
  );
}

export default App;
