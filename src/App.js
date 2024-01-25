
import './App.css';
import taswira from './image.jpg'

function App() {
  return (
    <div className="App">
      <h1>React app</h1>
      <img src='pic.jpg'/>
      <img src={taswira}/>

    </div>
  );
}

export default App;
