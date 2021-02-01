import React, { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '@material-ui/icons/Home';
import AccountBox from '@material-ui/icons/AccountBox';
import BusinessCenter from '@material-ui/icons/BusinessCenter';
import Web from '@material-ui/icons/Web';
import Mail from '@material-ui/icons/Mail';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import logo from '../Header/logo1.png';
import { SiGmail, SiLinkedin, SiGithub } from 'react-icons/si';

const useStyles = makeStyles({
  list: {
    width: 250,
    paddingTop: "50px",
  },
  fullList: {
    width: 'auto',
  },
});

function Header() {

  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className="list"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="listToggle">
        <div>
          <a href="mailto:yannis.aitkhelifa@gmail.com">
            <SiGmail/>
          </a>
        </div>
      </List>
      <List className="listToggle">
        <div>
          <a href="https://www.linkedin.com/in/yannis-ait-khelifa-1648331ab/">
            <SiLinkedin/>
          </a>
        </div>
      </List>
      <List className="listToggle">
        <div>
          <a href="https://github.com/YansYansYans">
            <SiGithub/>
          </a>
        </div>
      </List>
    </div>
  );

  
  const [header,setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <div>
      <div className={header ? 'header active' : 'header'}>
        <div className="headerLeft">
          <Fade left>
          <a href="/NewPortfolio">
            <img src={logo} />
          </a>
          </Fade>
        </div>
        <nav>
          <ul>
          <Fade top>
            <li>
              <a className="a__header" href="#hero">
                HOME
              </a>
            </li>
            <li>
              <a className="a__header" href="#hero2">
                PROFIL
              </a>
            </li>
            <li>
              <a className="a__header" href="#hero3">
                COMPETENCES
              </a>
            </li>
            <li>
              <a className="a__header" href="#hero6">
                REALISATION
              </a>
            </li>
            <li>
              <a className="a__header" href="#hero7">
                CONTACT
              </a>
            </li>
            </Fade>
          </ul>
        </nav>
        <div className="headerRight">
          <div>
            {['right'].map((anchor) => (
              <React.Fragment key={anchor}>
                <Fade right>
                <button className="btnContact"  onClick={toggleDrawer(anchor, true)}>
                  <IoIosMenu/>
                </button>
                </Fade>
                <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="headerMobile">
        <BottomNavigation value={value} onChange={handleChange} className="BottomNavigation">
          <BottomNavigationAction href="#hero" label="Home" value="Home" icon={<Home />} />
          <BottomNavigationAction href="#hero2" label="Profil" value="Profil" icon={<AccountBox />} />
          <BottomNavigationAction href="#hero3" label="Compétence" value="Compétence" icon={<BusinessCenter />} />
          <BottomNavigationAction href="#hero6" label="Réalisation" value="Réalisation" icon={<Web />} />
          <BottomNavigationAction href="#hero7" label="Contact" value="Contact" icon={<Mail />} />
        </BottomNavigation>
      </div>
    </div>
  )
}

export default Header