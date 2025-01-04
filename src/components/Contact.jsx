import "../Contact.css";

export default function Contact() {
  return (
    <>
      <div
        className="contact-container"
        style={{ fontFamily: "Space Grotesk" }}
      >
        <h1 style={{ fontSize: "4em", fontWeight: "900" }}>Contact</h1>
        <div className="contact-desc">
          Interested in working together? I’m always open to new opportunities
          and collaborations. Drop me a message!
        </div>
        <ul className="info-container-contact">
          <li className="school-email">
            Email:&nbsp;
            <a
              href="mailto:g234zhan@uwaterloo.ca"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              g234zhan@uwaterloo.ca
            </a>
          </li>
          <li className="lin">
            LinkedIn:&nbsp;
            <a
              href="https://linkedin.com/in/gordonzhang1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              linkedin.com/in/gordonzhang1
            </a>
          </li>
          <li className="git">
            GitHub:&nbsp;
            <a
              href="https://github.com/gordonzhang1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              github.com/gordonzhang1
            </a>
          </li>
          <li className="res">
            Resume:&nbsp;
            <a
              href="/Gordon_Zhang_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              Gordons Resume
            </a>
          </li>
          <li className="res">
            Phone:&nbsp;
            <a
              href="tel:7787980399"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              +1 (778)-798-0399
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
