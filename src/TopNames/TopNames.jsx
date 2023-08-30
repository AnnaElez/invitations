import classes from "./TopNames.module.css";

const TopNames = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.photo}>
        <div className={classes.text_wrapper}>
          <h1>Ռուդոլֆ և Ռեբեկկա</h1>
          <p className={classes.date}>Date:16 september 2023</p>
          <hr />
          <p className={classes.nice_text}>
            We can't wait to see you at our wedding. Hope you'll join us
            throughout the whole day
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopNames;
