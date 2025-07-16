import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ImageSlider from './components/SlideTrack';
import BlockLineGuide from './components/BlockLineGuide/BlockLineGuide';
import ProductContainer from './components/ProductContainer/ProductContainer';
import ad1 from './assets/images/ad1.png';
import ad2 from './assets/images/ad2.png';
import ad3 from './assets/images/ad3.png';



const sampleImages = [ad1, ad2, ad3];
const links = ['#', '#', '#'];

function App() {
  return (
    <div className="App">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      
      <main className="main-content">
        <Header/>
        <ImageSlider className="image-slider" discount={50} images={sampleImages} links={links} width={1100} height={500}/>
        <BlockLineGuide className='block-line-guide' content="Sản phẩm" />
        <ProductContainer className='product-container'/>

      </main>
    </div>
  );
}

export default App;
