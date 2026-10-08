import React from 'react';
import iphoneImg from '../assets/img/iphoneProject.png';
import macLw from '../assets/img/macProject.png';
import textBubble from '../assets/img/textbubble.gif';
import dp from '../assets/img/dp.jpg';

// smooth-scroll helper for the two hero buttons
const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    el && el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

function IntroComponent() {
    const [showResults, setShowResults] = React.useState(true)
    const onClick = () => setShowResults(false)

    return (
        <div className="IntroComponent">
            <div className="IntroComponentWrapper" style={{padding:20 , width:"50%"}}>
                <div style={{fontSize:"150%"}}>
                    {/* the rotating role text is drawn by CSS (.headingIntro span::before) */}
                    <h1 className="headingIntro"><span></span><strong style={{color:"var(--blue)"}}> .</strong></h1></div>
                    <img src={textBubble} className="textBubble" alt="" />
                    <div className="hiddenText">
                        <p  style={{color:"var(--textcolor)",opacity:0.5 }}>Hey There! I am Gourav Raut - an AI Full-Stack Developer. I build and ship production apps: mobile, backend and AI. Welcome to my Professional Portfolio.</p>
                        <div style={{display:"flex"}}>
                            <a href="/" onClick={scrollTo('socials')}><button className="btn">Connect Now</button></a>
                            <a href="/" onClick={scrollTo('projects')}><button className="btn2">My Projects</button></a>
                        </div>
                     </div>
                     { showResults ?
                    <div className="idCard" style={{display:"flex",flexDirection:"column",marginTop:30,border:"2px solid var(--border)",borderRadius:10}}>
                        <div style={{padding:5,width:"100%",backgroundColor:"var(--bar)",fontSize:"150%",borderBottom:"1px solid var(--border)",height:25,borderTopLeftRadius: 10,borderTopRightRadius:10,display:"flex",alignItems: "center",justifyContent:"start"}}>
                            <h1 onClick={onClick} style={{marginTop:10,cursor:"pointer"}}><strong style={{color:"#FE5E58"}}> .</strong></h1>
                            <h1 style={{marginTop:10}}><strong style={{color:"#FEBD2C"}}>.</strong></h1>
                            <h1 style={{marginTop:10}}><strong style={{color:"#27C841"}}> .</strong></h1>
                        </div>
                        <div style={{display:"flex", alignItems: 'center',padding:20}}>
                            <img src={dp} className="dp" alt="Gourav Raut" />
                            <div className="idText" style={{padding:20 , fontSize:"80%"}}>
                                <h1>Gourav Raut</h1>
                                <h3 style={{fontFamily:"EBGaramondRegular",opacity:0.3,marginTop:-10}}>AI Full-Stack Developer @ Algo Chowk</h3>
                            </div>
                        </div>
                    </div> : <br/>
                    }
            </div>

            <div className="imageIntro" id="imageIntro1">
                <img className="iphoneImg" src={iphoneImg} alt="AlgoTrade backtest on iPhone" width="38%"/>
                <span style={{fontSize:"150%"}}className="specialtext"><p style={{left:"-120px",position:"relative",marginTop:-45,textAlign:"right",color:"orange"}} className="cartoonText cartoonTextIntro">More of such interesting projects ~</p></span>
                <img className="macLw" src={macLw} alt="Project on Mac" width="100%"/>
            </div>
        </div>
    )
}

export default IntroComponent
