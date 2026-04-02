"use client";
import Image from "next/image";
import "./homePage.css";
import me from "../../public/me.png";
import me2 from "../../public/me2.png";
import Navbar from "@/components/navbar/Navbar";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();
  return (
    <main className="home">
      <Navbar />
      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <span className="badge">Hello, I am</span>

          <h1>Muhammad Ansif</h1>

          <p>MERN Stack Developer | React | Next.js | Full-Stack Developer</p>

          <div className="hero-buttons">
            <a href="/muhammad-ansif.pdf" download className="btn primary">
              Download CV
            </a>

            <a href="#projects" className="btn secondary">
              My Work
            </a>
          </div>
        </div>

        <div className="hero-right">
          <Image
            src={me} // replace with your image
            alt="Ansif"
            width={400}
            height={500}
            className="hero-image"
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about-me">
        <div className="about-left">
          <Image src={me2} alt="workspace" width={400} height={300} />
        </div>

        <div className="about-right">
          <h2>About Me</h2>

          <p>
            BCA graduate from Calicut University with hands-on experience
            building full-stack web apps using MERN stack, React.js, and
            Next.js. Passionate about clean code, REST APIs, and
            high-performance apps.
          </p>

          <div className="skills">
            <div className="skill">
              <span>React / Next.js</span>
              <div className="bar-1">
                <div style={{ width: "90%" }} />
              </div>
            </div>

            <div className="skill">
              <span>Node / Express</span>
              <div className="bar">
                <div style={{ width: "85%" }} />
              </div>
            </div>

            <div className="skill">
              <span>MongoDB / MySQL</span>
              <div className="bar">
                <div style={{ width: "80%" }} />
              </div>
            </div>
            <div className="skill">
              <span>javascript</span>
              <div className="bar">
                <div style={{ width: "95%" }} />
              </div>
            </div>
          </div>

          <div className="about-buttons">
            <a href="mailto:kiichu7034@gmail.com" className="btn primary">
              Hire Me
            </a>

            <button className="btn secondary" onClick={()=>route.push("/contact")}>Contact</button>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects">
        <h2>My Projects</h2>

        <div className="project-grid">
          <div className="project-card">
            <h3>eduClass</h3>
            <p>Full-stack e-learning platform with Stripe & JWT</p>
            <a
              href="https://online-course-frontend-azure.vercel.app/"
              target="_blank"
            >
              View Project
            </a>
          </div>

          <div className="project-card">
            <h3>Book App</h3>
            <p>E-commerce MERN app with payments & authentication</p>
            <a
              href="https://book-app-frontend-nine-tau.vercel.app/"
              target="_blank"
            >
              View Project
            </a>
          </div>

          <div className="project-card">
            <h3>Defence Platform</h3>
            <p>React + Tailwind professional UI</p>
            <a href="https://defence-security.vercel.app/" target="_blank">
              View Project
            </a>
          </div>

          <div className="project-card">
            <h3>Product App</h3>
            <p>CRUD React app with API integration</p>
            <a
              href="https://react-project-two-pink.vercel.app/"
              target="_blank"
            >
              View Project
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
