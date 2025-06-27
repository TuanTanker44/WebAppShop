import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import SlideTrack from './components/SlideTrack/SlideTrack';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main className="main-content">
        <Header />
      </main>
    </div>
  );
}

export default App;
