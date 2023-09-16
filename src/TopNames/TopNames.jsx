import classes from "./TopNames.module.css";

const TopNames = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.photo}>
        <div className={classes.text_wrapper}>
          <p className={classes.invitation}>Հարսանյաց Հրավիրատոմս</p>
          <h1>
            Ռուդոլֆ <br /> և <br />
            Ռեբեկա
          </h1>
          <img src="images/olive.png" alt="olive branch" />
          <p className={classes.date}>
            Հոկտեմբերի 31 <br /> 2023թ
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopNames;
