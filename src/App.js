import './App.css';
import Principal from './components/principal';
import Slider from './components/slider';
import Cards from './components/cards';

function App() {
  return (
    <div>
      <nav class="menu-container">

        <input type="checkbox" aria-label="Toggle menu" />
        <span></span>
        <span></span>
        <span></span>



        <div class="menu">
          <ul>
            <li>
              <a href="#jiisic">
                JIISIC'22
              </a>
            </li>
            <li>
              <a href="#topics">
                TOPICS
              </a>
            </li>
            <li>
              <a href="#cfp">
                CFP
              </a>
            </li>
            <li>
              <a href="#sub">
                SUBMISSION
              </a>
            </li>
            <li>
              <a href="#regis">
                REGISTRATION
              </a>
            </li>
            <li>
              <a href="#comm">
                COMMITTEES
              </a>
            </li>
            <li>
              <a href="#ven">
                VENUE
              </a>
            </li>
            <li>
              <a href="#past">
                PAST EDITIONS
              </a>
            </li>
          </ul>
          <ul>
          </ul>
        </div>
      </nav>
      <Principal />
      <Slider />
      <Cards />
    </div>
  );
}

export default App;
