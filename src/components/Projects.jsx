import "../Projects.css";
import loo from "../assets/loolooloonew.png";
import js from "../assets/jsnew.png";
import ts from "../assets/tsnewnew.png";
import c from "../assets/cnew.png";
import cplus from "../assets/cplusnew.png";
import python from "../assets/pythonnew.png";
import html from "../assets/htmlnew.png";
import css from "../assets/cssnew.png";
import java from "../assets/javanew.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import docker from "../assets/docker.png";
import git from "../assets/git.png";
import webpack from "../assets/webpack.png";
import tailwind from "../assets/tailwind.png";
import firebase from "../assets/firebase.png";
import openai from "../assets/OpenAI.png";
import cloud from "../assets/cloud.png";
import YAML from "../assets/YAML.png";
import sa from "../assets/sa-cover.jpeg";
import portfolio from "../assets/portfolio.png";
import firestore from "../assets/firestore.png";
import postman from "../assets/postman.png";
import github from "../assets/github.png";
import WhaleBeing from "../assets/WhaleBeing.png";
import Azure from "../assets/Azure.png";
import NumPy from "../assets/NumPy.png";
import Pandas from "../assets/Pandas.png";
import Flask from "../assets/Flask.png";
import biggerpicture from "../assets/biggerpicture.png";
import Vue from "../assets/Vue.png";
import mysql from "../assets/mysql.png";
import sql from "../assets/sql.png";

export default function Projects() {
  function handleshake() {
    window.open("https://github.com/gordonzhang1/ShakespeareAI");
  }

  return (
    <div className="projects">
      <h1
        className="projects-header"
        style={{ fontSize: "4em", fontWeight: "1000" }}
      >
        Projects
      </h1>
      <div className="card-container">
        <div className="header-desc">
          <div className="box-header">
            <div className="desc-git">
              <h2 style={{ fontSize: "1.5em", fontWeight: "900" }}>
                <span>WhaleBeing | 1st place DeltaHacks</span>
              </h2>

              <img
                onClick={() => {
                  window.open("https://github.com/gordonzhang1/WhaleBeing");
                }}
                className="github loo"
                src={github}
                style={{
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
          <div className="sa-demo">
            <a
              href="https://www.youtube.com/watch?v=WyINpCzZDsw"
              target="blank"
            >
              <span style={{ color: "blue" }}>Demo Video</span> |{" "}
            </a>
            <a href="https://www.whalebeing.co/">
              <span
                style={{
                  color: "blue",
                }}
              >
                Website
              </span>
            </a>
          </div>
          <div className="desc-container">
            <p>
              {" "}
              Did you know that up to 20,000 whales per year are killed by ships
              globally?
            </p>
            <p className="projectdesc">
              WhaleBeing is a full-stack dynamic AI prediction model for
              whale-ship collisions. To build this, we built a machine learning
              model with NumPy and Pandas, using a boosted regression tree with
              open source satellite data to produce a whale distribution
              prediction at any day of the year.
            </p>
          </div>

          <div className="loo-skills">
            <img className="loo-skill-item" src={js} title="JavaScript" />
            <img className="loo-skill-item" src={react} title="React" />
            <img className="loo-skill-item" src={Flask} title="Flask" />
            <img className="loo-skill-item" src={node} title="Node.js" />
            <img className="loo-skill-item" src={python} title="Python" />
            <img className="loo-skill-item" src={Azure} title="Azure" />
            <img className="loo-skill-item" src={Pandas} title="Pandas" />
            <img className="loo-skill-item" src={NumPy} title="Numpy" />
          </div>
        </div>
        <img className="loo whale" src={WhaleBeing} />
      </div>
      <div className="card-container">
        <div className="header-desc">
          <div className="box-header">
            {" "}
            <h2 style={{ fontSize: "1.5em", fontWeight: "900" }}>
              ShakespeareAI
            </h2>
            <img
              onClick={handleshake}
              className="github"
              src={github}
              style={{
                cursor: "pointer",
              }}
            />
          </div>
          <div className="sa-demo">
            <a
              href="https://www.youtube.com/watch?v=lmbQf5aHT-o"
              target="blank"
            >
              <span style={{ color: "blue" }}>Demo Video</span> |{" "}
              <a href="https://shakespeareai.ca">
                <span
                  style={{
                    color: "blue",
                  }}
                >
                  Website
                </span>
              </a>
            </a>
          </div>
          <p className="projectdesc">
            ShakespeareAI is a AI digital note-taking web app that quizzes you
            based on your handwritten notes in real-time. Press Quiz Me, and
            ShakespeareAI transforms your notes and drawings into a personalized
            set of questions, helping you retain information more effectively.
          </p>

          <div className="loo-skills">
            <img className="loo-skill-item" src={js} title="JavaScript" />
            <img className="loo-skill-item" src={react} title="React" />
            <img className="loo-skill-item" src={node} title="Node.js" />
            <img className="loo-skill-item" src={firebase} title="Firebase" />
            <img className="loo-skill-item" src={firestore} title="Firestore" />
            <img className="loo-skill-item" src={openai} title="OpenAI API" />
            <img className="loo-skill-item" src={git} title="Git" />
            <img
              className="loo-skill-item"
              src={cloud}
              title="Cloud Vision API"
            />
          </div>
        </div>
        <img className="loo sa" src={sa} />
      </div>

      <div className="card-container">
        <div className="header-desc">
          <div className="box-header">
            <div className="desc-git">
              <h2 style={{ fontSize: "1.5em", fontWeight: "900" }}>
                LooLooLoo
              </h2>
              <img
                onClick={() => {
                  window.open("https://github.com/gordonzhang1/LooLooLoo1");
                }}
                className="github loo"
                src={github}
                style={{
                  cursor: "pointer",
                }}
              />
            </div>
          </div>
          <div className="sa-demo">
            <a
              href="https://www.youtube.com/watch?v=z4kfvKR1sek"
              target="blank"
            >
              <span style={{ color: "blue" }}>Demo Video</span>
            </a>
          </div>
          <div className="desc-container">
            <p>Water Water Water, Loo Loo Loo!</p>
            <p className="projectdesc">
              LooLooLoo is a full-stack indoor mapping web app that directs you
              to the nearest washroom when you drink from a water fountain.
            </p>
          </div>

          <div className="loo-skills">
            <img className="loo-skill-item" src={js} title="JavaScript" />
            <img className="loo-skill-item" src={react} title="React" />
            <img className="loo-skill-item" src={node} title="Node.js" />
            <img className="loo-skill-item" src={ts} title="TypeScript" />
            <img className="loo-skill-item" src={docker} title="Docker" />
            <img className="loo-skill-item" src={YAML} title="YAML" />
            <img className="loo-skill-item" src={html} />
            <img className="loo-skill-item" src={css} />
          </div>
        </div>
        <img className="loo looloo" src={loo} />
      </div>
      <div className="card-container">
        <div className="header-desc">
          <div className="box-header">
            <div className="desc-git">
              <h2 style={{ fontSize: "1.5em", fontWeight: "900" }}>
                TheBiggerPicture
              </h2>
              <img
                onClick={() => {
                  window.open("https://github.com/Raptors65/uofthacks-12");
                }}
                className="github loo"
                src={github}
                style={{
                  cursor: "pointer",
                }}
              />
            </div>
          </div>

          <div className="desc-container">
            <p className="projectdesc">
              The Bigger Picture is a real-time photo mosaic collaboration web
              app.
            </p>
          </div>

          <div className="loo-skills">
            <img className="loo-skill-item" src={js} title="JavaScript" />
            <img className="loo-skill-item" src={Vue} title="Vue" />
            <img className="loo-skill-item" src={Flask} title="Flask" />
            <img className="loo-skill-item" src={python} title="Python" />
            <img className="loo-skill-item" src={sql} title="SQL" />
            <img className="loo-skill-item" src={mysql} title="MySQL" />
          </div>
        </div>
        <img className="loo looloo" src={biggerpicture} />
      </div>
      <div className="card-container">
        <div className="header-desc portfolio-con">
          <div className="box-header portfolio">
            <h2 style={{ fontSize: "1.5em", fontWeight: "900" }}>
              Personal Portfolio
            </h2>
          </div>
          <p>This Portfolio</p>
          <div className="loo-skills">
            <img className="loo-skill-item" src={js} />
            <img className="loo-skill-item" src={react} />
            <img className="loo-skill-item" src={html} />
            <img className="loo-skill-item" src={css} />
            <img className="loo-skill-item" src={git} />
            <img className="loo-skill-item" src={tailwind} />
          </div>
        </div>
      </div>
    </div>
  );
}
