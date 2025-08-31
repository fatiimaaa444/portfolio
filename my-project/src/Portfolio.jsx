
import './portfolio.css'
import Spline from "@splinetool/react-spline";
import logo from "./assets/transparent.png"
const Portfolio = () => {
  return (
    <>
      <nav>
        <div className="nav-logo">
          <img src={logo} alt="" />

        </div>
        <div className="nav-right">
          <li><a href="#home">HOME</a></li>
          <li><a href="#skill">SKILLS</a></li>
          <li><a href="#project">PROJECT</a></li>
          <li><a href="#contact">CONTACT</a></li>

        </div>
        <button><i class="fa-solid fa-bars"></i></button>
      </nav>
      <section id='home' className="sec1">
        <div className="sec1-left">
          <span>Hello Welcome , I am Fatima</span>
          <h1>BUILDING THE WEB , FRONT TO BACK</h1>
          <p>Full Stack Web Developer creating responsive and efficient websites with React, Node.js, and modern technologies.</p>
          <p>I strive to transform ideas into functional and engaging digital experiences.</p>
          <a href="#contact"><button>Contact Me</button></a>
        </div>
        <div className="sec1-right">

          <Spline scene="https://prod.spline.design/YhbBoIqoqgdpD3D4/scene.splinecode" className='spline' />
        </div>
      </section>
      <section id='skill' className='sec2'>
        <h1 id='head'>Skills</h1>
        <div className="sec2-con">
          <div className="skill-card">
            <h1><i class="fa-solid fa-code"></i></h1>
            <h2>FrontEnd Development</h2>
            <h3> React , HTML , CSS , JavaScript </h3>
          </div>
          <div className="skill-card">
            <h1><i class="fa-solid fa-laptop-code"></i></h1>
            <h2>BackEnd Development</h2>
            <h3> Node.js , Express.js </h3>
          </div>
          <div className="skill-card">
            <h1><i class="fa-solid fa-paintbrush"></i></h1>
            <h2>UI/UX Design</h2>
            <h3>Responsive design , User testing </h3>
          </div>
        </div>

      </section>
      <section className="sec3">
        <div id='contact' className="contact">
          <form >
            <label for="Name">Your Name</label>
            <input type="text" required />
            <label htmlFor="name">Your Email</label>
            <input type="text" required />
          </form>

          <button>Submit</button>
        </div>
      </section>
      <footer>
        <div className="li">
          <a href="#"><li><i class="fa-brands fa-whatsapp"></i></li></a>
          <a href="#"><li><i class="fa-brands fa-facebook"></i></li></a>
          <a href="#"><li><i class="fa-brands fa-instagram"></i></li></a>
          <a href="#"><li><i class="fa-brands fa-upwork"></i></li></a>
          <a href="#"><li><i class="fa-brands fa-linkedin-in"></i></li></a>
        </div>




      </footer>
    </>
  )
}
export default Portfolio

