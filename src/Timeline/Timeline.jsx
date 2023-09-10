import React, { useState } from "react";
import WeddingTimeline from "../WeddingTimeline/WeddingTimeline";
import classes from "./Timeline.module.css";

const Timeline = () => {
  const [whosTimeline, setWhosTimeline] = useState("");

  const showBrideTimeline = () => {
    setWhosTimeline("bride");
  };
  const showGroomTimeline = () => {
    setWhosTimeline("groom");
  };
  return (
    <div className={classes.question}>
      <h3>Um koxmiceq masnakcum harsaniqin?</h3>
      <section>
        <button onClick={showGroomTimeline} className={classes.button}>
          Pesai
        </button>
        <button onClick={showBrideTimeline} className={classes.button}>
          Harsi
        </button>
      </section>
      {whosTimeline !== "" && (
        <>
          <h3>ORAKARG</h3>
          <WeddingTimeline whosTimeline={whosTimeline} />
        </>
      )}
    </div>
  );
};

export default Timeline;
