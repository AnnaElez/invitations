import classes from "./TopNames.module.css";

const TopNames = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.photo}>
        <div className={classes.text_wrapper}>
          <h1>
            Ռուդոլֆ <br /> և <br />
            Ռեբեկա
          </h1>

          <p className={classes.nice_text}>
            Անհամբեր սպասում ենք ձեզ մեր ընտանիքի ստեղծման օրը
          </p>
          <p className={classes.date}> հոկտեմբերի 31 2023թ</p>
        </div>
      </div>
    </div>
  );
};

export default TopNames;
