import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import Card from './components/card';

const cardData = {
  card1:{
    cardName: "Tuannx",
    description: "Tuan is so handsome"
  },
  card2:{
    cardName: "NxTuan",
    description: "Tuan is so inteligent"
  },
  card3:{
    cardName: "NXT",
    description: "Tuan is so lazy"
  }

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="card-container">
          <Card {...cardData.card1}/>
          <Card {...cardData.card2}/>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <Button />
        </div>
      </header>
    </div>
  );
}

export default App;
