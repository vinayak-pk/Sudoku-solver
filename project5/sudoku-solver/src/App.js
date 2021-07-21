import logo from './logo.svg';
import './App.css';

import {Sudoku} from "./Components/Sudoku"
function App() {
  return (
    <div className="App">
      <h1 style={{color:'lightgray'}}>Soduko solver</h1>
       <Sudoku/>
    </div>
  );
}

export default App;
