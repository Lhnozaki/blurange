import React from "react";
import "../../index.scss";
import styles from "./JResume1.module.scss";
import JHeader1 from "../JHeader1/JHeader1";
import PdfFile from "./JResume1.pdf";
import PDF from "react-pdf-js";

export default function JResume1() {
  return (
    <div className="templateWrapper">
      <JHeader1 />
      <div id={styles.container}>
        <PDF file={PdfFile} />
      </div>
    </div>
  );
}
