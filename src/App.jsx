import { motion } from 'framer-motion'
import './App.css'

// Parent staggers its children's entrance
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

// Each child fades up
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const projects = ['AlgoTrade', 'Skippr', 'SnapLay']

export default function App() {
  return (
    <main>
      {/* Hero: staggered intro */}
      <motion.section className="hero" variants={container} initial="hidden" animate="show">
        <motion.h1 variants={item}>Gourav Raut</motion.h1>
        <motion.p variants={item}>Full-stack engineer. Mobile, backend, AI.</motion.p>
      </motion.section>

      {/* Projects: each card reveals when scrolled into view */}
      <section className="projects">
        {projects.map((name) => (
          <motion.article
            key={name}
            className="card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            {name}
          </motion.article>
        ))}
      </section>
    </main>
  )
}
