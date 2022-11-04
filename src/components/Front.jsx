import React from 'react';
import "./front.css";
export default function Contact() {
    return (
        <>
      <nav>     
        <img alt="logo" class="logo" src={require('./images/Airbnb-logo.jpg')}/>
            <ul>
                <li>Become a Host</li>
                <li>Sign up</li>
                <li>Sign in</li>
            </ul>
      </nav>
      <div class="main1">
        <img src="https://a0.muscache.com/im/pictures/4ac2fa8a-7fe5-47e5-beb3-3df2823f2734.jpg?im_w=1680" alt="background"></img>
        <div class="box">
        <h1>Holiday rentals in india</h1>
        <p>Find and book unique accommodation on Airbnb</p>
        <div class="locate">
        <p><label for="dog-names">Location</label><br></br>
         <input type="text"></input></p>
        </div>
        <div class="check">
          <p><label for="dog-names">Check in</label><br></br>
         <input type="date"></input></p>
         </div>
         <div class="out">
          <p><label for="dog-names">Check out</label><br></br>
         <input type="date"></input></p>
         </div>
         <div class="abc">
         <p><label for="adult">Adults</label><br></br>
         <select name="age" id="ages">
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
            <option value="1">5</option>
            <option value="1">6</option>
            <option value="1">7</option>
            <option value="1">8</option>
            <option value="1">9</option>
            <option value="1">10</option>
            <option value="1">11</option>
            <option value="1">12</option>
            <option value="1">13</option>
            <option value="1">14</option>
            <option value="1">15</option>
            <option value="1">16</option>        
        </select></p>
         </div>
         <div class="child">
         <p><label for="age1">Childrens</label><br></br>
         <select name="ageq1" id="agesa">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
            <option value="1">5</option>
            <option value="1">6</option>
            <option value="1">7</option>
                    
        </select></p>
         </div>
         <div class="btn">
         <button class="search">Search</button>
         </div>
        
        </div>
      </div>
      </>
    )
  }