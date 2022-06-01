import '../App.css';
import logo from '../logo.svg';
import coni from '../coni.png';
import utbis from '../UTBIS.png'
import ieee from '../ieee.png'
import computerS from '../computerS.png'

function Principal() {
    return (
        <div>
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

        </div>
    );
}
export default Principal;