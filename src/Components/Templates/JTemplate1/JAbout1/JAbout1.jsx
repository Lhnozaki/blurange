import React from "react";
import "../../index.scss";
import styles from "./JAbout1.module.scss";
import JHeader1 from "../JHeader1/JHeader1";

export default function JAbout1() {
  return (
    <div className="templateWrapper">
      <JHeader1 />
      <div id={styles.container}>
        <h1 className={styles.title}>
          Thanks for visiting my about page! I’m Andrew Dewis, a freelance coder
          based in Honolulu who specializes in React, Angular, and CSS. On this
          page, you’ll find answers to frequently asked questions about the
          world of freelance coding.
        </h1>
        <div className={styles.aboutContainer}>
          <h1>What is a freelance coder?</h1>
          <p>
            A freelance coder is a person who is self-employed and gets paid for
            creating software content for businesses, individuals, and websites.
          </p>
          <h1>How did I become a freelance coder?</h1>
          <p>
            To get started as a freelance coder, you have to build a portfolio
            of high-quality coding samples that are relevant to how you want to
            make a living as a freelance coder. For example, if you want to get
            paid to code health and wellness sites, you will need coding samples
            that are focused on health and wellness. In 2010, I began guest
            hosting on popular blogs like Search Engine Journal, Search Engine
            Watch, and Social Media Examiner. By 2015, I had added Content
            Marketing Institute, CrazyEgg, HubSpot, Moz, Salesforce, and
            Unbounce to my portfolio, which allowed me to attract clients who
            needed coding content for their websites.
          </p>
          <h1>How do freelance coders find work?</h1>
          <p>
            There are many ways to find work as a freelance coder. Here are a
            few that most freelancers like to rely on to generate income.{" "}
            <br></br>- Look for publications that are always open for paid
            software submissions. <br></br>- Look for freelance coding gigs on
            networks like Freelance Coding Gigs, ProCoder Jobs, or LinkedIn.{" "}
            <br></br>- Use inbound marketing strategies to attract freelance
            clients to your website from search and social media.
          </p>
        </div>
      </div>
    </div>
  );
}
