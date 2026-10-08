import React from 'react'

// gradients reuse the palette of the skill cards so the section feels native
const gradients = [
  'linear-gradient(135deg, #3beb7b 0%, #3fa1fc 100%)',
  'linear-gradient(135deg, #f5576c 0%, #eebd89 100%)',
  'linear-gradient(135deg, #5ee7df 0%, #7e38e0 100%)',
  'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
]

const items = [
  {
    file: 'algochowk.sh',
    role: 'AI Full-Stack Developer',
    place: 'Algo Chowk',
    where: 'Hyderabad · On-site',
    when: 'Oct 2026 - Present',
    current: true,
    points: [
      'Built the backend for AlgoTrade, an algorithmic trading research platform that turns plain-English trading ideas into backtested strategies for Indian stocks, indices and options.',
      'AI-powered strategy generation, secure code execution, market data handling and statistical validation.',
    ],
    tags: ['Python', 'FastAPI', 'LangGraph', 'Gemini', 'Supabase'],
  },
  {
    file: 'suas.sh',
    role: 'Full Stack Developer Intern',
    place: 'SUAS Enterprises LLP',
    where: 'Hyderabad · Hybrid',
    when: 'Jul 2026 - Oct 2026',
    points: [
      'Built and deployed Skippr, a production community concierge app on the Google Play Store.',
      'Engineered the backend architecture, authentication workflows, REST APIs and cloud services.',
    ],
    tags: ['React Native', 'Expo', 'Supabase', 'PostgreSQL'],
  },
  {
    file: 'mandin.sh',
    role: 'Flutter Developer',
    place: 'ManDin Studios',
    where: 'Hyderabad · Hybrid',
    when: 'Nov 2025 - May 2026',
    points: [
      'Built cross-platform Flutter modules for internal products: responsive UIs, API integration and state management.',
      'Worked with backend teams on performance, scalability and smooth deployment.',
    ],
    tags: ['Flutter', 'Dart', 'REST APIs'],
  },
  {
    file: 'voix.sh',
    role: 'Flutter Developer Intern',
    place: 'Voix.Digital',
    where: 'Remote',
    when: 'Aug 2025 - Nov 2025',
    points: [
      'Built SnapLay, a short-movie streaming app with a reels-style vertical video feed, Google Sign-In and OTP login, published on the Google Play Store.',
      'Worked in a team with Git, REST APIs and GetX state management.',
    ],
    tags: ['Flutter', 'GetX', 'Firebase', 'AWS'],
  },
  {
    file: 'cloudinfratech.sh',
    role: 'Flutter Developer and Trainer',
    place: 'Cloud Infratech Solutions',
    where: 'Hyderabad · Hybrid',
    when: 'May 2025 - Jul 2025',
    points: [
      'Created EduLink, a real-time learning app with Flutter (GetX) and the MERN stack, with secure authentication and 35% higher engagement.',
      'Trained 800+ students at IIIT Ongole on Flutter architecture, REST APIs and UI best practices.',
    ],
    tags: ['Flutter', 'MERN', 'Training'],
  },
]

// fades each card in once it scrolls into view
function ExperienceCard({ item, index }) {
  const ref = React.useRef(null)
  const [seen, setSeen] = React.useState(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return setSeen(true)
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect() } }, { threshold: 0.15 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className={`expItem ${seen ? 'expSeen' : ''}`} style={{ '--dot': gradients[index % gradients.length] }}>
      <div className="idCard expCard" style={{ display: 'flex', flexDirection: 'column', border: '2px solid lightgrey', borderRadius: 10 }}>
        <div style={{ padding: 5, width: '100%', backgroundColor: '#ededed', fontSize: '150%', borderBottom: '1px solid lightgrey', height: 25, borderTopLeftRadius: 10, borderTopRightRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
          <h1 style={{ marginTop: 10 }}><strong style={{ color: '#FE5E58' }}> .</strong></h1>
          <h1 style={{ marginTop: 10 }}><strong style={{ color: '#FEBD2C' }}>.</strong></h1>
          <h1 style={{ marginTop: 10 }}><strong style={{ color: '#27C841' }}> .</strong></h1>
          <span className="expFile">{item.file}</span>
        </div>
        <div className="expBody">
          <div className="expWhen" style={{ background: gradients[index % gradients.length] }}>
            {item.current && <span className="expLive" />}{item.when}
          </div>
          <h1 className="expRole">{item.role}</h1>
          <h3 className="expPlace">{item.place} <span>· {item.where}</span></h3>
          {item.points.map((p) => <p key={p} className="para expPoint">{p}</p>)}
          <div className="expTags">{item.tags.map((t) => <span key={t}>{t}</span>)}</div>
        </div>
      </div>
    </div>
  )
}

function Experience() {
  return (
    <div id="experience" className="experience">
      <h1>Experience <strong style={{ color: '#27C841' }}>.</strong></h1>
      <p className="cartoonText" style={{ fontSize: '150%', color: 'orange', margin: '0 0 10px 0' }}>~ Where I have been building things</p>
      <div className="expList">
        {items.map((item, i) => <ExperienceCard key={item.file} item={item} index={i} />)}
      </div>
    </div>
  )
}

export default Experience
