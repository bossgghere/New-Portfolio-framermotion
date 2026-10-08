import React from 'react'
import Reveal from './Reveal'
import coffee from '../assets/photos/coffee-break.jpg'
import night from '../assets/photos/night-walk.jpg'
import thumbs from '../assets/photos/thumbs-up.jpg'

// three frames from the real world, each in a little macOS-style photo window
const photos = [
  { src: coffee, file: 'coffee-break.jpg', caption: '~ coffee break, always', alt: 'Gourav relaxing in a cafe', pos: '50% 18%', tilt: -2 },
  { src: night, file: 'night-walk.jpg', caption: '~ night walks, best ideas', alt: 'Gourav walking down a street at night', pos: '50% 55%', tilt: 1.5 },
  { src: thumbs, file: 'thumbs-up.jpg', caption: '~ thumbs up, it shipped', alt: 'Gourav sitting on a wall giving two thumbs up', pos: '50% 22%', tilt: -1 },
]

function Moments() {
  return (
    <div id="moments" className="moments">
      <Reveal><h1>Beyond the code <strong style={{ color: '#7e38e0' }}>.</strong></h1></Reveal>
      <Reveal delay={100}><p className="cartoonText" style={{ fontSize: '150%', color: 'orange', margin: '0 0 6px 0' }}>~ a few frames from the real world</p></Reveal>
      <div className="momentsGrid">
        {photos.map((p, i) => (
          <Reveal key={p.file} delay={i * 130}>
            <figure className="photoCard idCard" style={{ '--tilt': `${p.tilt}deg` }}>
              <div className="footerCardBar">
                <h1><strong style={{ color: '#FE5E58' }}> .</strong></h1>
                <h1><strong style={{ color: '#FEBD2C' }}>.</strong></h1>
                <h1><strong style={{ color: '#27C841' }}> .</strong></h1>
                <span className="expFile">{p.file}</span>
              </div>
              <img src={p.src} alt={p.alt} loading="lazy" style={{ objectPosition: p.pos }} />
              <figcaption className="photoCaption cartoonText">{p.caption}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default Moments
