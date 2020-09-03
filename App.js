import React from "react";
import "./App.css";
import pic from "./image/1.jpg";
import pic1 from "./image/2.jpeg";
import pic2 from "./image/3.jpeg";
import pic3 from "./image/4.jpeg";

export default function App() {
  
  return (
    
    <div>
        <div className = 'container'>
             <div className = 'one'>
                 <img src={pic} alt="mypic" width="150px" height="100px" />
            </div>

            <div className = 'two'>
              <img src={pic1} alt="" width="260px" height="480px" />
              <h4>C.R.I.'s PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
              <ul>
                  <li>C.R.I.'s energy efficient products are well recognized by various Gov. Institutions as trustworthy products for
                  various projects across the globe to save energy.</li>
                  <li>C.R.I.'s is the highest contributor in the country for the projects of EESL to replace the old inefficient
                  pumps with 5 star rated energy efficient smart pumps with Lot enabled control panel.</li>
                </ul>
                <img className="three" src={pic2} alt="" width="550px" height="280px" />
                </h4>
            </div>

            <div className="four">
            <h4>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE
              SAVING OF MORE THEN 9,000 MILLION UNITS OF POWER FOR THE NATION.
            </h4>
            <img src={pic3} alt="" width="700px" height="350px" />
            <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGGMENTS</h3>
            <p>CHEMICALS & PROCESS | POWER | WASTE & WASTE WATER | OILS & GASES | MARINE & DEFENCE |
                METAL & MINING | SOLOR | BUILDING | HVAC | FIRE FIGHTING<br />
              </p>
            </div>
        </div>
        
        <footer className="footer">
        <div className="footer-content">
          <p className="copyright">Copyright &copy; 2020 CodeAndCreate - All Right Reserved</p>
        </div>
      </footer>
</div>
  );
}