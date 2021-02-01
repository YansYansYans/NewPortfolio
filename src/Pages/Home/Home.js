import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import ProgressBar from 'react-animated-progress-bar';
import Zoom from 'react-reveal/Zoom';
import { AiFillHtml5 } from 'react-icons/ai';
import { BsChatSquareQuoteFill } from 'react-icons/bs';
import { DiCss3, DiSass } from 'react-icons/di';
import { FcCommandLine, FcPodiumWithSpeaker, FcEditImage, FcDatabase } from 'react-icons/fc';
import { SiGmail, SiLinkedin, SiGithub, SiJavascript, SiMysql, SiReact, SiNodeDotJs, SiWordpress, SiFigma, SiBootstrap, SiWix, SiShopify, SiPrestashop } from 'react-icons/si';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SlideUi from '@material-ui/core/Slide';
import ArrowBottom from "./arrowBottom.png";
import HandRight from "./hand.png";
import HandLeft from "./hand2.png";
import Burger from "./burger.png";
import Computer from "./pc.png";
import Back from "./back.svg";
import Grille from "./grille.png";
import Ball from "./ball.png";
import Cursor from "./cursor.png";
import Pen from "./pen.png";
import Phone from "./phone.png";
import Dev from "./dev.png";
import Design from "./design.png";
import Communication from "./communication.png";
import Seo from "./seo.png";
import Concept from "./concept.png";
import Dalil from "./dalil.png";
import Familit from "./familit.png";
import Nebulart from "./nebularts.png";
import Figure from "./figure.svg";
import logo from '../../Composant/Header/logo1.png';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <SlideUi direction="up" ref={ref} {...props} />;
});

function HomePage() {

  const [open, setOpen] = React.useState(false);

  const [open2, setOpen2] = React.useState(false);

  const [open3, setOpen3] = React.useState(false);

  const [open4, setOpen4] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  const handleClickOpen4 = () => {
    setOpen4(true);
  };

  const handleClose4 = () => {
    setOpen4(false);
  };

  return (
    <div>
      <div id="hero" class="hero"> 
        <div class="hero__title">Bienvenue sur mon <span>Portfolio</span></div>
        <div class="hero__arrow"><a href="#hero2"> <Fade bottom><img src={ArrowBottom}/></Fade></a></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
      </div>
      <div id="hero2" class="hero2">  
        <div class="hero__title">Moi c'est <span>Yannis</span>. Je suis <span>développeur</span> web, <span>webDesigner</span> et <span>formateur !</span></div>
        <div class="hero__arrow"><img src={Computer}/></div>
        <div class="hero__arrow2"><img src={HandRight}/></div>
        <div class="hero__arrow3"><img src={HandLeft}/></div>
        <div class="hero__arrow4"><img src={Burger}/></div>  
        <div class="hero__arrow8"><Zoom><img src={Grille}/></Zoom></div> 
        <div class="hero__arrow7"> <Fade right><img src={Back}/> </Fade></div>
        <div class="hero__block"><Fade right>Un projet ?<a href="#hero7"><button className="btnContact">Contactez-moi</button></a></Fade></div>
        <div class="hero__arrow6"><a href="#hero3"><Fade bottom><img src={ArrowBottom}/></Fade></a></div>
      </div>
      <div id="hero3" class="hero3"> 
        <div class="hero__arrow">
          <Fade left><div className="divIcon"><AiFillHtml5/><span>HTML</span></div></Fade>
          <Fade right><div className="divIcon"><DiCss3/><span>CSS</span></div></Fade>
          <Fade top><div className="divIcon"><DiSass/><span>SASS</span></div></Fade>
          <Fade bottom><div className="divIcon"><SiJavascript/><span>JavaScript</span></div></Fade>
          <Fade left><div className="divIcon"><SiMysql/><span>SQL</span></div></Fade>
          <Fade right><div className="divIcon"><SiReact/><span>React</span></div></Fade>
          <Fade top><div className="divIcon"><SiNodeDotJs/><span>Node.js</span></div></Fade>
          <Fade bottom><div className="divIcon"><SiWordpress/><span>Wordpress</span></div></Fade>
          <Fade left><div className="divIcon"><SiFigma/><span>Figma</span></div></Fade>
          <Fade right><div className="divIcon"><SiBootstrap/><span>Bootstrap</span></div></Fade>
          <Fade top><div className="divIcon"><SiWix/><span>Wix</span></div></Fade>
          <Fade bottom><div className="divIcon"><SiShopify/><span>Shopify</span></div></Fade>
          <Fade right><div className="divIcon"><SiPrestashop/><span>Prestashop</span></div></Fade>
        </div>
        <div class="hero__title">Je vous propose mes services pour toute création de <span>site web, vitrine, e-commerce.</span></div>
        <div class="hero__arrow1"><img src={Computer}/></div>
        <div class="hero__arrow2"><img src={Pen}/></div>
        <div class="hero__arrow3"><img src={Cursor}/></div>
        <div class="hero__arrow4"><img src={Ball}/></div>
        <div class="hero__arrow6"><a href="#hero4"><Fade bottom><img src={ArrowBottom}/></Fade></a></div>
      </div>
      <div id="hero4" class="hero4"> 
        <div class="hero__arrow__big">
          <div class="hero__arrow1">
            <div class="number">
              <Flip top>
                7J
              </Flip>
            </div>
            <div class="text">
              <Zoom bottom>
                de conception minimum 
              </Zoom>
            </div>
          </div>
          <div class="hero__arrow2">
            <div class="number">
              <Flip bottom>
                24H
              </Flip>
            </div>
            <div class="text">
              <Zoom left>
                et je commence le projet
              </Zoom>
            </div>
          </div>
          <div class="hero__arrow4">
            <div class="number">
              <Flip right>
                100%
              </Flip>
            </div>
            <div class="text">
              <Zoom top>
                satisfait
              </Zoom>
            </div>
          </div>
        </div>
        <div class="hero__arrow6"><a href="#hero5"><Fade bottom><img src={ArrowBottom}/></Fade></a></div>
      </div>
      <div id="hero5" class="hero5"> 
      <div class="hero__title">Et en <span>bref</span>, voila ce que je sais faire.</div>
        <div class="hero__arrow__big">
          <button onClick={handleClickOpen}>
            <div className="hero__arrow__block">
              <div>
                <img src={Dev}/>
                <p>Web Développement</p>
              </div>
            </div>
          </button>
          <Dialog  open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
            <DialogTitle id="alert-dialog-slide-title">{"Web Développement"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Développement et programation de Front end interactif et épuré. Utilisation de framework comme React.Js et de langage comme HTML, Javascript, PHP ou SQL JS / SQL.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                FERMER
              </Button>
            </DialogActions>
          </Dialog>
          <button onClick={handleClickOpen2}>
            <div className="hero__arrow__block">
              <div>
                <img src={Design}/>
                <p>Web Design UI/UX</p>
              </div>
            </div>
          </button>
          <Dialog open={open2} TransitionComponent={Transition} keepMounted onClose={handleClose2} aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
            <DialogTitle id="alert-dialog-slide-title">{"Web Design UI/UX"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Design et charte graphique à la fois réfléchie et cohérante avec au préalable une maquette sur Figma. Utilisation de SASS (scss, css).
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose2} color="primary">
                FERMER
              </Button>
            </DialogActions>
          </Dialog>
          <button onClick={handleClickOpen3}>
            <div className="hero__arrow__block">
              <div>
                <img src={Seo}/>
                <p>Réferencement SEO</p>
              </div>
            </div>
          </button>
          <Dialog open={open3} TransitionComponent={Transition} keepMounted onClose={handleClose3} aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
            <DialogTitle id="alert-dialog-slide-title">{"Réferencement SEO"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Renforcement du SEO grace au référencement naturelle à l'aide de mots clés et du respect des critères (images etc). 
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose3} color="primary">
                FERMER
              </Button>
            </DialogActions>
          </Dialog>
          <button onClick={handleClickOpen4}>
            <div className="hero__arrow__block">
              <div>
                <img src={Communication}/>
                <p>Communication</p>
              </div>
            </div>
          </button>
          <Dialog open={open4} TransitionComponent={Transition} keepMounted onClose={handleClose4} aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
            <DialogTitle id="alert-dialog-slide-title">{"Communication"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Utilisation des réseaux sociaux et autres outils de communication dans sa strategie digitale. 
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose4} color="primary">
                FERMER
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <div class="hero__arrow6"><a href="#hero6"><Fade bottom><img src={ArrowBottom}/></Fade></a></div>
      </div>
      <div id="hero6" class="hero6"> 
        <div class="hero__title">Et en <span>image</span> ça donne ça !</div>
        <div className="hero__arrow__big">
          <div className="hero__arrow__block">
            <a href="https://nebularts-agency.com/">
              <img src={Nebulart}/>
              <div className="btnPlus">
                Voir le site
              </div>
            </a>
          </div>
          <div className="hero__arrow__block">
            <a href="https://www.conceptpeinture.com/">
              <img src={Concept}/>
              <div className="btnPlus">
                Voir le site
              </div>
            </a>
          </div>
          <div className="hero__arrow__block">
            <a href="https://dalilimmo.com/">
              <img src={Dalil}/>
              <div className="btnPlus">
                Voir le site
              </div>
            </a>
          </div>
          <div className="hero__arrow__block">
            <a href="http://www.gite-lafamilit.fr/">
              <img src={Familit}/>
              <div className="btnPlus">
                Voir le site
              </div>
            </a>
          </div>
        </div>
        <div class="hero__block"><Fade left>Vous voulez en voir plus ? <a href="https://github.com/YansYansYans?tab=repositories"><button className="btnContact">Voir mon Github</button></a></Fade></div>
        <div class="hero__arrow6"><a href="#hero7"><Fade bottom><img src={ArrowBottom}/></Fade></a></div>
      </div>
      <div id="hero7" class="hero7"> 
        <div class="hero__title">Une <span>question</span>, un <span>projet</span>, un <span>partenariat</span>? Contactez-moi juste en bas !</div>
        <div className="hero__arrow__bigbis">
         
        </div>
        <div className="hero__arrow__big">
          <form action="https://formspree.io/" method="POST">
            <div className="inputBox">
              <input type="text" name="name" placeholder="Nom"/>
              <input type="email" name="_replyto" placeholder="Email"/>
            </div>
            <div className="inputBox">
              <input type="tel" name="tel" placeholder="Téléphone"/>
              <input type="text" name="objet" placeholder="Objet"/>
            </div>
            <div className="inputBox">
              <textarea className="textarea" type="text" name="message" rows="9" placeholder="Votre message..." />
            </div>
            <input type="submit" class="send" value="Envoyer"/>
          </form>
        </div>
        <div className="networkMobil">
          <a href="tel:+33611838856">
            0770453527
          </a>
          <br></br>
          <a href="mailto:yannis.aitkhelifa@gmail.com">
            yannis.aitkhelifa@gmail.com
          </a>
          <div>
            <a href="https://www.malt.fr/profile/yannisaitkhelifa">
              <BsChatSquareQuoteFill/>
            </a>
            <a href="https://www.linkedin.com/in/yannis-ait-khelifa-1648331ab/">
              <SiLinkedin/>
            </a>
            <a href="https://github.com/YansYansYans">
              <SiGithub/>
            </a>
          </div>
        </div>
        <div className="hero__arrow__bigter">
          <div className="p">
            <p>
              <a href="tel:+33611838856">
                0770453527
              </a>
              <br></br>
              <a href="mailto:yannis.aitkhelifa@gmail.com">
                yannis.aitkhelifa@gmail.com
              </a>
              <br></br>
              <div>
              <a href="https://www.malt.fr/profile/yannisaitkhelifa">
                  <BsChatSquareQuoteFill/>
                </a>
                <a href="https://www.linkedin.com/in/yannis-ait-khelifa-1648331ab/">
                  <SiLinkedin/>
                </a>
                <a href="https://github.com/YansYansYans">
                  <SiGithub/>
                </a>
              </div>
            </p>
          </div>
          <img src={Figure}/>
        </div>
        <div class="hero__arrow6"><a href="#hero8"><Fade bottom><img src={ArrowBottom}/></Fade></a></div>
      </div>
      <div id="hero8" class="hero8"> 
        <div className="hero__arrow__big1">
          <img src={logo}/>
        </div>
        <div className="hero__arrow__big2">
          Je suis auto-entrepreneur et je propose des services complets. De la conception à la construction de beaux site web.
        </div>
        <div className="hero__arrow__big3">
          <div className="left">
            © 2021 All Rights Reserved.
          </div>
          <div className="right">
            <a href="https://www.malt.fr/profile/yannisaitkhelifa">
              <BsChatSquareQuoteFill/>
            </a>
            <a href="https://www.linkedin.com/in/yannis-ait-khelifa-1648331ab/">
              <SiLinkedin/>
            </a>
            <a href="https://github.com/YansYansYans">
              <SiGithub/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage