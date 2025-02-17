import React from "react";
import { Link } from 'gatsby';
export const Header = ({bg,classHeader}) => (
  <header className={`header-main ${classHeader}`} style={{background: bg}}>
    <input className="menu-btn" type="checkbox" id="menu-btn" />
    <label className="menu-icon" htmlFor="menu-btn">
      <span className="navicon" />
    </label>
    <ul className="menu">
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link smooth spy to='#speaker-sec'>Speakers</Link>
        {/* <a onClick={()=>{
          const anchor = document.querySelector('#speaker-sec')
          anchor.scrollIntoView({behavior: 'smooth', block:'center'})
        }}>Speaker</a> */}
      </li>
      <li>
      <Link>Schedule</Link>
      </li>
      <li>
        <a target="blank" href="https://docs.google.com/presentation/d/1m3EFIbILQgZ9qC9LFqJj-juJVBONknEJ/edit?usp=sharing&ouid=117757354059914775964&rtpof=true&sd=true">Sponsorship Prospectus</a> 
      </li>
      <li>
        <Link to="/code-of-conduct">Code of Conduct</Link>
      </li>
      <li>
        <Link to="/faq">FAQ</Link>
      </li>
      <li className="menu-highlight">
        <a href="https://pyconf.hydpy.org/2020" target="_blank">
          PyConf Hyderabad 2020
        </a>
      </li>
    </ul>
  </header>
);
