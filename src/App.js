import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ImageSlider from './components/SlideTrack';
import ad1 from './assets/images/ad1.png';
import ad2 from './assets/images/ad2.png';
import ad3 from './assets/images/ad3.png';


const sampleImages = [ad1, ad2, ad3];

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main className="main-content">
        <Header />
        <div className='image-slider'>
          <ImageSlider images={sampleImages} width={800} height={500}/>
        </div>
      </main>
    </div>
  );
}

export default App;
