import logo from './logo.svg';
import './App.css';
import WordCard from './WordCard';
const word = "LABSA03_6210110045";
function App() {
  return (
      <div className="App">
        <WordCard value={word}/>
      </div> 
  );
}

export default App;
