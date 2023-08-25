import React, { useState } from 'react';
import drawers from './images/drawers.jpg';
import './App.css';
// import share from './images/icon-share.svg';
// import shareActive from './images/icon-share-active.svg';
import avatar from './images/avatar-michelle.jpg';
import facebook from './images/icon-facebook.svg';
import twitter from './images/icon-twitter.svg';
import pinterest from './images/icon-pinterest.svg';


function App() {
  const [isShown, setIsShown] = useState(false);
  const toggleFIeldset = () => setIsShown(!isShown);
  return (
    <main className="main container">
      <div className="img-box">
        <img src={drawers} alt="drawers"/>
      </div>

      <div className="content">
        <h2>
        Shift the overall look and feel by adding these wonderful 
        touches to furniture in your home
        </h2>
        <p>
        Ever been in a room and felt like something was missing? Perhaps 
        it felt slightly bare and uninviting. I`ve got some simple tips 
        to help you make any room feel complete.
        </p>

        <div className="content-footer">
          <div>
            <img src={avatar} alt="avatar"/>
            <span>Michelle Appleton</span>
            <p>28 Jun 2020</p>
          </div>

          <button className="share" onClick={toggleFIeldset}/>
          {isShown &&
            <ul className="social">
              <li>Share</li>
              <li><img src={facebook} alt="facebook" /></li>
              <li><img src={twitter} alt="twitter"/></li>
              <li><img src={pinterest} alt="pinterest"/></li>
              <div className="triangle-down">
              </div>
            </ul>
            
          }
          
          

        </div>
      </div>
    </main>
  );

}

export default App;
