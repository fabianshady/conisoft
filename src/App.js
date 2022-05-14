import logo from './logo.svg';
import './App.css';
import coni from './coni.png';
import utbis from './UTBIS.png'
import ieee from './ieee.png'
import computerS from './computerS.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="menu">
          <div class="menu-icon-wrapper">
            <div class="menu-icon" onclick="toggleCssMenu(this)">
              <div class="three-line">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div id="cssmenu">
            <ul>
              <li><a href="#">JIISIC'22</a></li>
              <li><a href="#">Topics</a></li>
              <li><a href="#">CFP</a></li>
              <li><a href="#">Submission</a></li>
              <li><a href="#">Registration</a></li>
              <li><a href="#">Committees</a></li>
              <li><a href="#">Venue</a></li>
              <li><a href="#">Past Editions</a></li>
            </ul>
          </div>
          {
            function toggleCssMenu(icon) {
              var cssmenu = document.getElementById('cssmenu');
              if (icon.className.indexOf('active') == -1) {
                icon.className = 'menu-icon active';
                cssmenu.style.display = "block";
                setTimeout(function () { cssmenu.className = 'active'; }, 0);
              }
              else {
                icon.className = 'menu-icon';
                cssmenu.className = '';
                setTimeout(function () { cssmenu.style.display = "none"; }, 411);
              }
            }
          }

        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h2>The 10th International Conference in Software Engineering Research and Innovation (CONISOFT 22)</h2>
        <br></br>
        <h2>Universidad Tecnológica Bilingüe Internacional y Sustentable de Puebla</h2>
        <br></br>
        <div>
          <img src={coni} alt="coni" height="100vh" />
          <img src={utbis} alt="utbis" height="100vh" />
        </div>
        <div>
          <img src={ieee} alt="ieee" height="100vh" />
          <img src={computerS} alt="computerS" height="100vh" />
        </div>
      </header>
      <div className='slider'>
        <br></br>
        <br></br>
        <br></br>
        <h1 class="gradient-text">Slider del 10 aniversario</h1>
        <p>
          <code>mas cosas</code>
        </p>
      </div>
      <div className='all'>
        <div className='secc'>
          <h2>Welcome to CONISOFT 2022</h2>
          <p>Regarding the COVID 19 pandemic, to safeguard the health of participants, CONISOFT 2022 conference will be hybrid.</p>
          <br></br>
          <p>The 10th International Conference in Software Engineering Research and Innovation (CONISOFT 2022) will be held at Universidad Tecnológica Bilingüe Internacional y Sustentable de Puebla, October 24-28, 2022. The purpose of the conference is to bring together practitioners and researchers from academy, industry, and government in order to advance the state of the art in Software Engineering, as well as generating synergy between academy and industry, defining a collaboration strategy to support and promote the development of the software industry in Mexico and worldwide. Papers that combine theory and practice are especially welcome.</p>
        </div>
        <div className='secc2'></div>
        <div className='secc2'></div>
        <div className='secc'></div>
        <div className='secc'></div>

      </div>
    </div>
  );
}

export default App;
