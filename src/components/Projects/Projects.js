import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import flow from "../../Assets/Projects/flow.png";
import yieldapp from "../../Assets/Projects/yieldapp.png";
import dns from "../../Assets/Projects/dns.png";
import exchange from "../../Assets/Projects/sky-token-exchange.png";
import cookies from "../../Assets/Projects/cookies.png";
import supplychain from "../../Assets/Projects/supplychain.png";
import bookstore from "../../Assets/Projects/bookstore.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exchange}
              isBlog={false}
              title="Sky Token Exchange"
              description="This is a fully functioning decentralized exchange where users can buy and sell Ether and SKY token. Built with React.js, Redux and Solidity. (Currently being updated to support the Ethereum Merge testnet.)"
              ghLink="https://github.com/vvronskyFX/blockchain_dex_dapp"
              demoLink="https://sky-token-exchange.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={supplychain}
              isBlog={false}
              title="Supply Chain dApp"
              description="This is a fully functioning asset tracking app on the ethereum blockchain. Featuring Wallet to Wallet tracking and sharing."
              ghLink="https://github.com/vvronskyFX/supply-chain-dapp"
              demoLink="https://supply-chain-dapp.surge.sh/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dns}
              isBlog={false}
              title="Digital DNS dApp"
              description="Super cool digital Domain Naming Service dApp to mint your own DNS! Become truly decentralized on polygon. Full interaction and minting with visible OpenSea link. Created on polygon via Solidity smart contracts and ReactJS."
              ghLink="https://github.com/vvronskyFX/domain-starter"
              demoLink="https://polygon-digital.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flow}
              isBlog={false}
              title="NFT dApp built on Flow"
              description="An NFT minting app built on the Flow blockchain. Created using Cadence smart contracts and ReactJS."  
              ghLink="https://github.com/vvronskyFX/flow-nft-starter"
              demoLink="https://flow-nft-starter-ashen.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cookies}
              isBlog={false}
              title="Cookie Shop 🍪"
              description="An ecomm store built on the Solana blockchain. Buy some cookies and get rewards for a coupon on your next purchase. Built using Rust smart contract and Typescript. "
              ghLink="https://github.com/vvronskyFX/solana-pay-tutorial"
              demoLink="https://solana-pay-ecomm-store.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yieldapp}
              isBlog={false}
              title="Yield Aggregator dApp"
              description="An app that rebalances manually by the User to find the best yield between Compound and Aave. This was a sandbox development for Perseverance Managing Futures. ReactJS, Solidity and Heroku hosting were used to make this app."
              ghLink="https://github.com/vvronskyFX/yield-aggregator-app"
              demoLink="https://yield-aggregator-app.herokuapp.com/"   
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookstore}
              isBlog={false}
              title="Solana Pay Bookstore 📚"
              description="An online bookstore that accepts USDC via Solana Pay. You can even open your own sellers account! Invest some money here :) Built using Solana Pay on Solana Network, IPFS and ReactJS."
              ghLink="https://github.com/vvronskyFX/solana-pay-starter"
              demoLink="https://solana-pay-bookstore.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
