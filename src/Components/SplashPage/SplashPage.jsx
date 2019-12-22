import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SplashPage.module.scss';
import SvgBanner from '../SvgBanner';
import Gallery from '../Gallery';
import feature1 from '../../assests/Splash-5.jpg';
import feature2 from '../../assests/Splash-6.jpg';
import feature3 from '../../assests/Splash-7.jpg';

const SplashPage = () => {
  return (
    <article className="container">
      <section id={styles.hero} className="container-lg">
        <div className={styles.heroContent}>
          <h1><span className="color-light-blue">Blur</span><span className="color-orange">range</span></h1>
          <h3>Your code doesn't repeat itself, why should you?</h3>
          <Link to="/editor"><button className="cta">get started for free</button></Link>
        </div>
        <div className={styles.galleryContainer}>
        <Gallery/>
      </div>
      </section>
      <section id={styles.companiesContent}>
        <h3 className="title">Companies Using Blurange</h3>
        <div className={styles.brandContainer}>
          <SvgBanner/>
          <SvgBanner/>
          <SvgBanner/>
          <SvgBanner/>
          <SvgBanner/>
          <SvgBanner/>
          <SvgBanner/>
          <SvgBanner/>
          <SvgBanner/>
          <SvgBanner/>
          <SvgBanner/>
          <SvgBanner/>
          <SvgBanner/>
          <SvgBanner/>
          <SvgBanner/>
          <SvgBanner/>
        </div>
      </section>
      <section id={styles.aboutContent} className="scroll-element">
        <h3 className='title'>3 steps to go live</h3>
        <div className={styles.instructionContainer}>
          <div className={styles.instruction}>
            <div className={styles.illustration}>
              <img src={feature1} alt="first feature"/>
            </div>
            <div className={styles.content}>
              <h3 className="color-blue">1. Pick a theme</h3>
              <p>Take the stress of design off your mind. We have a multitude of different templates for you to choose from.</p>
            </div>
          </div>
          <div className={styles.instruction}>
            <div className={styles.illustration}>
              <img src={feature2} alt="second feature"/></div>
            <div className={styles.content}>
              <h3 className="color-blue">2. Keep it DRY</h3>
              <p>Drop in a document, add it from <strong>Github</strong>, we'll fill out the template for you just change what you want.</p>
            </div>
          </div>
          <div className={styles.instruction}>
            <div className={styles.illustration}>
              <img src={feature3} alt="three feature"/></div>
            <div className={styles.content}>
              <h3 className="color-blue">3. Make it live</h3>
              <p>You can host it yourself or on our servers. We have custom domains too if you want&nbsp;them.</p> 
            </div>
          </div>
        </div>
      </section>
      <section id={styles.bottomCta}>
        <div className={styles.content}>
          <h2 id={styles.ctaHeader} className="title">Test it out</h2>
          <p>Try it out and deploy your site now. No credit card needed unless you want lol.</p>
          <Link to="/editor/templates"><button className="cta">Get Started</button></Link>
        </div>
      </section>
      <footer className={styles.footer}>&copy; 2020 blurange</footer>
    </article>
  )
}

export default SplashPage;
