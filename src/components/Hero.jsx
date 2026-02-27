import './Hero.css'

const Hero = () => {

  const handleClick = () => {
    const section = document.getElementById("skills")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="hero">
      <div className="hero-content">

        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Selvam Pachimuthu</span>
        </h1>

        <p className="hero-subtitle">
          Pharmacovigilance Specialist | Data & Healthcare Analytics
        </p>

        <p className="hero-description">
          Passionate about improving patient safety by combining pharmacovigilance
          expertise with data analytics, machine learning, and modern technologies.
          I enjoy turning healthcare data into meaningful insights.
        </p>

        <div className="hero-buttons">
          <button className="cta-button" onClick={handleClick}>
            Explore My Skills
          </button>

          <button
            className="secondary-button"
            onClick={() => window.open("https://github.com/", "_blank")}
          >
            View GitHub
          </button>
        </div>

      </div>

     <div className="hero-image">
  <img src="/profile-2.png" alt="profile" className="hero-profile" />
</div>
    </div>
  )
}

export default Hero