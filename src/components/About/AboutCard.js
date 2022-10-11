import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey! Nice to see you here, I am <span className="purple">Vladlen Vronsky </span>
            from <span className="purple"> Boston, Massachusetts.</span>
            <br />
            <br />Life has its twists and turns. My experience ranges across many spectrums. 
            I’m fortunate to have a full-time role as a Business Analyst working on a large ERP implementation for a successful family-owned produce supplier.
            <br />
            <br />
            I’ve been a Discretionary Trader for 6 years and a Full-Stack Web Developer for 3 years. 
            I’ve had experience building a Life Insurance brokerage and also Data Analytics for an Aviation Consulting company.
            <br />
            <br />
            I’ve always had a passion for art, economics, music, aviation and design. When I discovered the power of Web Development, it opened a world of opportunities for me. 
            I’m able to finally blend my skills and passions into creating awesome projects that help the world. 
            From front-end/back-end design, global macro analysis, to blockchain development and on-chain analytics.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring Historical Locations
            </li>
            <li className="about-activity">
              <ImPointRight /> Sailing & Flying
            </li>
            <li className="about-activity">
              <ImPointRight /> Target Shooting
            </li>
           <li className="about-activity">
              <ImPointRight /> Building Cool Applications
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning about Economics
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning about new tech
            </li>
            <li className="about-activity">
              <ImPointRight /> Mind-hacking, Running, Swimming & Biking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Yesterday I was clever so I changed the world, Today I am wise so I AM changing myself"{" "}
          </p>
          <footer className="blockquote-footer">Rumi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
