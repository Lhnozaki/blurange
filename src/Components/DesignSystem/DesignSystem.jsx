import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DesignSystem.module.scss';

export default function DesignSystem() {
  return (
    <article className={styles.appContainer}>
      <section id={styles.hero}>
        <div className="content">
          <h4>Case Study</h4>
          <h1>Blurange Design System</h1>
        </div>
      </section>
      <section id={styles.typographyContainer}>
        <h2 className="title">Typography</h2>
        <div className={styles.typeWrapper}>
          <div className={styles.typeSpecimen}>
            <h1>Blurange</h1>
            <h3>For those without time</h3>
            <p>
              Vaporware listicle hammock, bicycle rights post-ironic cardigan
              quinoa man bun cred live-edge celiac mustache tbh master cleanse.
              Deep v mixtape 90's squid pok pok gluten-free taxidermy, af
              coloring book. Church-key scenester cornhole pok pok neutra
              gentrify actually tumblr vice. Humblebrag live-edge small batch,
              wolf listicle health goth offal kogi four dollar toast glossier.
              Gastropub iPhone bespoke pinterest, pop-up raw denim +1 leggings
              thundercats jean shorts tumeric. Air plant offal cray freegan +1
              everyday carry.
            </p>
          </div>
          <div className={styles.typeInfo}>
            <h3>Headings are Rubik</h3>
            <p>Body copy is Nunito Sans</p>
          </div>
        </div>
      </section>
      <section id={styles.colorsContainer}>
        <h2 className="title">Color Palette</h2>

        <div className={styles.colorPalette}>
          <Link to="/jtemplate1">
            <div className={styles.colorBlock}>
              <div id={styles.darkAccent} className={styles.color}></div>
              <p className={styles.colorName}>dark-accent</p>
              <p>#101820</p>
            </div>
          </Link>
          <div className={styles.colorBlock}>
            <div id={styles.greyAccent} className={styles.color}></div>
            <p className={styles.colorName}>grey-accent</p>
            <p>#dfe6e9</p>
          </div>
          <div className={styles.colorBlock}>
            <div id={styles.offWhite} className={styles.color}></div>
            <p className={styles.colorName}>off-white</p>
            <p>#f5f6fa</p>
          </div>
          <div className={styles.colorBlock}>
            <div id={styles.orange} className={styles.color}></div>
            <p className={styles.colorName}>orange</p>
            <p>#f39422</p>
          </div>
          <div className={styles.colorBlock}>
            <div id={styles.blue} className={styles.color}></div>
            <p className={styles.colorName}>blue</p>
            <p>#010038</p>
          </div>
          <div className={styles.colorBlock}>
            <div id={styles.lightBlue} className={styles.color}></div>
            <p className={styles.colorName}>light-blue</p>
            <p>#293a80</p>
          </div>
        </div>
      </section>
      <section id={styles.buttonContainaer}>
        <h2 className="title">Buttons</h2>
        <div className={styles.buttonInfo}>
          <div>
            <button>click me</button>
          </div>

          <div className={styles.buttonDescription}>
            <p>
              All buttons have a padding of 15px on the top and bottom, also
              20px on the left and right. When hovered over, they scale up 1.05
              as well as change background color in order to give the user a
              tactile feeling.
            </p>
          </div>
        </div>
      </section>
      <section id={styles.linksContainer}>
        <h2 className="title">Links</h2>
        <div className={styles.linkExamples}>
          <ul>
            <li>
              <a href="#">click here</a>
            </li>
            <li>
              <a className={styles.altLink} href="#">
                learn more
              </a>
            </li>
          </ul>

                    <div className={styles.buttonDescription}>
                        <p>All buttons have a padding of 15px on the top and bottom, also 20px on the left and right. When hovered over, they scale up 1.05 as well as change background color in order to give the user a tactile feeling.</p>
                    </div>
                </div>
            </section>
            <section id={styles.linksContainer}>
                <h2 className="title">Links</h2>
                <div className={styles.linkExamples}>
                    <ul>
                        <li><button className={styles.a}>click here</button></li>
                        <li><button className={styles.aAlt}>learn more</button></li>
                    </ul>
          <div className={styles.linkDescription}>
            <p>
              All links will change color to show the user that they can
              interact with them. On a light background the link will turn from
              light-blue to blue. If the background is dark then the link will
              turn from off-white to orange.
            </p>
          </div>
        </div>
      </section>
      <section id={styles.cardContainer}>
        <h2 className="title">Cards</h2>
        <div className={styles.info}>
          <div className="card" id={styles.card}>
            <h4>OG Drip</h4>
            <p>
              A template for those who like them simple and want their work to
              do the talking.
            </p>
          </div>
          <div className={styles.description}>
            <p>
              All cards have the background of grey while having a slight border
              of a darker shade. They also have a subtle drop-shadow applied in
              order to give a sense of depth and heirarchy. There is also an
              all-around padding that should be uniform with all cards in it's
              cluster in order to contain all the contents inside of the card.
            </p>
          </div>
        </div>
      </section>
      <section id={styles.inputContainer}>
        <h2 className="title">Inputs</h2>
        <div className={styles.info}>
          <div className={styles.inputExamples}>
            <input type="text" placeholder="I'm an input" />
            <select>
              <option value="clout one">option one</option>
              <option value="clout two">option two</option>
              <option value="clout three">option three</option>
            </select>

            <textarea
              readOnly
              name="textarea"
              value="type something here"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className={styles.description}>
            <p>This is the input</p>
          </div>
        </div>
      </section>
    </article>
  );
}
