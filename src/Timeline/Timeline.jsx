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
      <h3>Ո՞ւմ կողմից եք հրավիրված</h3>
      <section className={classes.buttons}>
        <button onClick={showGroomTimeline} className={classes.button}>
          Փեսայի
        </button>
        <button onClick={showBrideTimeline} className={classes.button}>
          Հարսի
        </button>
      </section>
      {whosTimeline !== "" && <WeddingTimeline whosTimeline={whosTimeline} />}
      <p className={classes.small_text}>
        Հարսանիքի ընթացքում պասիվ լինել արգելվում է :)
        <br /> Սիրով սպասում ենք քեզ💚
      </p>
    </div>
  );
};

export default Timeline;
