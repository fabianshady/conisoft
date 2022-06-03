import './App.css';
import Principal from './components/principal';
import Slider from './components/slider';
import Cards from './components/cards';
import Carruselconteiner from './components/carruselconteiner';

function App() {
  return (
    <div className="App">
      <Principal/>
      <Slider/>
      <div className='carrusel'>
        <Carruselconteiner/>
      </div>
      <Cards/>
    </div>
  );
}

export default App;
