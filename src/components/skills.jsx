import { useState } from 'react'

function Skills() {
  const [activeSkill, setActiveSkill] = useState('development')

  const skills = {
    development: {
      title: 'Web Development',
      description:
        'Building responsive and interactive websites with modern frontend technologies.',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Responsive Design',
        'Git & GitHub',
      ],
    },

    cybersecurity: {
      title: 'Cybersecurity',
      description:
        'Learning security fundamentals and exploring practical cybersecurity concepts.',
      technologies: [
        'Security Fundamentals',
        'Networking',
        'Linux',
        'CTF Challenges',
        'Web Security',
        'Security Labs',
      ],
    },

    tools: {
      title: 'Tools & Workflow',
      description:
        'Tools I use to build, manage, test, and document my projects.',
      technologies: [
        'VS Code',
        'Git',
        'GitHub',
        'Chrome DevTools',
        'Figma',
        'Terminal',
      ],
    },
  }

  const current = skills[activeSkill]

  return (
    <section className="skills section" id="skills">
      <div className="section-heading">
        <p className="section-label">02 — Skills</p>
        <h2>Things I <span>work with.</span></h2>
      </div>

      <div className="skills-container">

        <div className="skill-tabs">
          <button
            className={activeSkill === 'development' ? 'active' : ''}
            onClick={() => setActiveSkill('development')}
          >
            <span>01</span>
            Web Development
            <b>↗</b>
          </button>

          <button
            className={activeSkill === 'cybersecurity' ? 'active' : ''}
            onClick={() => setActiveSkill('cybersecurity')}
          >
            <span>02</span>
            Cybersecurity
            <b>↗</b>
          </button>

          <button
            className={activeSkill === 'tools' ? 'active' : ''}
            onClick={() => setActiveSkill('tools')}
          >
            <span>03</span>
            Tools & Workflow
            <b>↗</b>
          </button>
        </div>

        <div className="skill-content">
          <div className="skill-number">
            {activeSkill === 'development'
              ? '01'
              : activeSkill === 'cybersecurity'
                ? '02'
                : '03'}
          </div>

          <h3>{current.title}</h3>

          <p>{current.description}</p>

          <div className="technology-list">
            {current.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills