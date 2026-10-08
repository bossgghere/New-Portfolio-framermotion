import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CodeIcon from '@mui/icons-material/Code';

function DialogProjects({ title, imgSrc, src, description, github, embed }) {
    const [open, setOpen] = React.useState(false);
    const [size, setSize] = React.useState("xl");

    const handleClickOpen = () => {
      setOpen(true);
      setSize("xl");
    };

    const handleClose = () => setOpen(false);

    // green dot toggles the popup between large and medium
    const changeSize = () => setSize(size === "xl" ? "md" : "xl");

    return (
        <div>
            <div className="projectCard" onClick={handleClickOpen}>
              <img src={imgSrc} alt={title} style={{width:"100%",height:"100%",borderRadius:7}}/>
            </div>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth={size}>
              <div style={{marginLeft:"auto",marginRight:"auto",width:"100%",display:"flex",flexDirection:"column",marginTop:0,border:"0px solid lightgrey",borderRadius:0}}>
                <div style={{padding:5,width:"100%",backgroundColor:"#f0f0f0",fontSize:"150%",borderBottom:"1px solid lightgrey",height:30,borderTopLeftRadius: 10,borderTopRightRadius:10,display:"flex",alignItems: "center"}}>
                    <div style={{display:"flex",justifyContent:"start",alignItems:"center"}}>
                        <h1 onClick={handleClose} style={{zIndex:50,marginTop:10,cursor:"pointer"}}><strong style={{color:"#FE5E58"}}> .</strong></h1>
                        <h1 style={{marginTop:10}}><strong style={{color:"#FEBD2C"}}>.</strong></h1>
                        <h1 onClick={changeSize} style={{marginTop:10,cursor:"pointer"}}><strong style={{color:"#27C841"}}> .</strong></h1>
                    </div>
                </div>
                <div style={{display:"flex",flexDirection: 'column',borderRadius:0}}>
                    <div className="iframeDiv">
                        {embed
                          ? <iframe allowFullScreen src={src} title={title} className="iframeFrame"/>
                          : <img src={imgSrc} alt={title} style={{width:"100%",height:"100%",objectFit:"contain",background:"#fff"}}/>}
                    </div>
                    <div className="instaTag" style={{padding:20 , fontSize:"80%"}}>
                        <div style={{display:"flex",flexDirection:"row",justifyContent:"start",alignItems: "center"}}>
                        <h1>{title}</h1>
                        <span style={{float:"right",marginLeft:"auto",display:"block"}} className="headernav">
                        <a href={src} target="_blank" rel="noreferrer"><OpenInNewIcon style={{marginRight:10}}/></a>
                        {github ? <a href={github} target="_blank" rel="noreferrer"><CodeIcon/></a> : <></>}
                        </span>
                        </div>
                        <h3 style={{fontFamily:"EBGaramondRegular",opacity:0.3,marginTop:-10}}>
                          {description}
                        </h3>
                    </div>
                </div>
              </div>
            </Dialog>
        </div>
    )
}

export default DialogProjects
