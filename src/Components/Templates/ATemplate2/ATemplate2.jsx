import React from "react";
import { Link } from "react-router-dom";
import "../index.scss";
import styles from "./ATemplate2.module.scss";

export default function ATemplate2() {
  return (
    <div id={styles.container} className="templateWrapper">
      <div className={styles.menu}>
        <button className={styles.menuBtn}>=</button>
        <div className={styles.menuContent}>
          <Link to="/editor/templates">Go back</Link>
          <Link to="/editor/templates">Contact Me</Link>
          <Link to="/editor/templates">GitHub</Link>
        </div>
      </div>

      <div className={styles.slider} id={styles.scroll}>
        <div className={styles.slide} id={styles.slide1}>
          <h1>Hi, my name is NAME.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
            impedit! Architecto dolorem a cum mollitia, unde eligendi maiores
            aliquam autem, quos numquam nostrum sint voluptas ipsam eius aut,
            quo asperiores?
          </p>
        </div>
        <div className={styles.slide} id={styles.slide2}>
          <h1>Work Experience</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            odio debitis dolor a? Enim saepe recusandae hic fuga repellat? Omnis
            veritatis reiciendis tenetur nesciunt temporibus cumque maxime rem,
            odio laborum. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Ullam soluta sed placeat, ea ipsum dolores tenetur totam
            explicabo voluptate reprehenderit a maiores, autem, optio
            dignissimos ab neque voluptatibus assumenda molestiae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque
            velit obcaecati consequatur? Optio quibusdam vel tempore sequi
            pariatur delectus fugit, eos, voluptas adipisci mollitia earum,
            laborum ab iste expedita. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Obcaecati nam ullam adipisci. Voluptates, quaerat
            fuga eligendi perspiciatis magnam ea explicabo minus, delectus
            beatae a ex dolorum debitis reiciendis nam quisquam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            nesciunt odit amet tempore obcaecati cum consequatur et ratione ut
            natus error ad non illum, dolorem omnis accusantium sapiente esse
            soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Fugiat eius vero repudiandae consequuntur omnis reiciendis delectus
            facilis adipisci, nemo repellendus, iusto facere aperiam quas ut,
            dolor obcaecati maxime accusantium. Veritatis.
          </p>
        </div>
        <div className={styles.slide} id={styles.slide3}>
          <h1>Education</h1>
          <p>Iusto facere aperiam quas ut, dolor obcaecati maxime.</p>
          <p>Fugiat eius vero repudiandae consequuntur omnis.</p>
        </div>
        <div className={styles.slide} id={styles.slide4}>
          <h1>Software Skills</h1>

          <div className={styles.skills}>
            <ul>
              <p>
                <li>Lorem</li>
                <li>Ipsum</li>
                <li>Asdfsdf</li>
                <li>Asdfsdf</li>
                <li>Vero</li>
                <li>Eius</li>
                <li>Repudiandae</li>
                <li>ASDF</li>
                <li>QWER</li>
                <li>DFOIJ</li>
                <li>POKPOK</li>
                <li>Omnis</li>
                <li>Maxime</li>
                <li>Flex</li>
                <li>ASDFSDF</li>
                <li>FLEXX</li>
                <li>LMAO</li>
                <li>Fugiat</li>
              </p>
              <p>
                <li>Ipsum</li>
                <li>Dolor</li>
                <li>Consect</li>
                <li>Elit</li>
                <li>Rem</li>
                <li>Harum</li>
                <li>Fugiat</li>
                <li>Git</li>
                <li>Amet</li>
                <li>Rem</li>
                <li>Quide</li>
                <li>Guoq</li>
                <li>Dicta</li>
                <li>Natus</li>
                <li>FLEX</li>
                <li>Quae</li>
                <li>Atque</li>
                <li>What</li>
              </p>
            </ul>
          </div>
        </div>
        <div className={styles.slide} id={styles.slide5}>
          <h1>Projects</h1>
          <div className={styles.slide5container}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem harum
              quas quae atque! Saepe explicabo ex libero in accusamus fugiat,
              aut qui voluptatibus eius recusandae quasi mollitia a soluta odit?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              perferendis autem blanditiis eum officiis dolorem quidem quod
              minus ullam vel amet ratione, delectus corporis natus dicta
              assumenda culpa. Delectus, dolor!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
              quaerat ipsam libero aliquid fugiat fuga assumenda nihil ipsum
              reprehenderit. Ut totam nisi ratione necessitatibus praesentium
              esse fugit id maxime laudantium! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Similique eos minima ratione
              deserunt voluptates, dolores fugiat labore iusto consequatur. Sed
              debitis adipisci, sit voluptas aspernatur dolorem at magnam fugiat
              aperiam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
