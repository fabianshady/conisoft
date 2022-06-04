import '../App.css';
import logo from '../logo.svg';
import coni from '../coni.png';
import utbis from '../UTBIS.png'
import ieee from '../ieee.png'
import computerS from '../computerS.png'

function Principal() {
    return (

        <header className="App-header">
          
        
            <br></br>
            <br></br>
            <br></br>
            <h2>The 10th International Conference in Software Engineering Research and Innovation (CONISOFT 22)</h2>
            <br></br>
            <h2>Universidad Tecnológica Bilingüe Internacional y Sustentable de Puebla</h2>
            <br></br>
            <div className="Images">
                <img src={coni} alt="coni" height="100vh" />
                <img src={utbis} alt="utbis" height="100vh" />

                <img src={ieee} alt="ieee" height="100vh" />
                <img src={computerS} alt="computerS" height="100vh" />
            </div>
            <br />
            <h2>Submission Deadline: June 11, 2022</h2>
        </header>


    );
}
export default Principal;