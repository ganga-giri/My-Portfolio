import { useState } from 'react'

function Journey() {
  const [activeJourney, setActiveJourney] = useState(0)

  const journey = [
    {
      number: '01',
      year: 'Foundation',
      title: 'Web Development',
      description:
        'I started by learning how websites work and began building interfaces with HTML, CSS, and JavaScript.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      color: 'lavender',
    },
    {
      number: '02',
      year: 'Building',
      title: 'Frontend Development',
      description:
        'I moved into building real projects and learning how to create responsive, interactive experiences.',
      tags: ['JavaScript', 'Git', 'GitHub', 'Responsive Design'],
      color: 'pink',
    },
   {
  number: '03',
  year: 'Exploring',
  title: 'Cybersecurity',
  description:
    "I'm exploring cybersecurity fundamentals, networking, Linux, web security, and practical security labs.",
  tags: ['Networking', 'Linux', 'Web Security', 'Security Labs'],
  color: 'mint',
},,
    {
      number: '04',
      year: 'Next chapter',
      title: 'Security Projects',
      description:
        'My next goal is to combine development and cybersecurity by building projects with security in mind.',
      tags: ['Python', 'Security Projects', 'CTFs', 'Ethical Hacking'],
      color: 'yellow',
    },
  ]

  const current = journey[activeJourney]

  return (
    <section className="journey section" id="journey">

      <div className="section-heading">
        <p className="section-label">04 — My journey</p>

        <h2>
          Learning, building,
          <br />
          and <span>exploring.</span>
        </h2>
      </div>


      <div className="journey-wrapper">

        <div className="journey-list">

          {journey.map((item, index) => (
            <button
              key={item.number}
              className={`journey-item ${
                activeJourney === index ? 'active' : ''
              }`}
              onClick={() => setActiveJourney(index)}
            >
              <span className="journey-number">
                {item.number}
              </span>

              <span className="journey-title">
                {item.title}
              </span>

              <span className="journey-arrow">
                ↗
              </span>
            </button>
          ))}

        </div>


        <div className={`journey-detail ${current.color}`}>

          <div className="journey-detail-top">
            <span>{current.year}</span>

            <span>{current.number}</span>
          </div>

          <div className="journey-detail-content">

            <p className="journey-small-title">
              CURRENT FOCUS
            </p>

            <h3>{current.title}</h3>

            <p className="journey-description">
              {current.description}
            </p>

            <div className="journey-tags">
              {current.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Journey