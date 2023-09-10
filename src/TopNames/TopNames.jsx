import classes from "./TopNames.module.css";

const TopNames = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.photo}>
        <div className={classes.text_wrapper}>
          <h1>
            Ռուդոլֆ Ֆրանգուլյան և <br />
            Ռեբեկա Մինասյան
          </h1>

          <p className={classes.nice_text}>
            Անհամբեր սպասում ենք ձեզ հոկտեմբերի 31 2023թ մեր ընտանիքի ստեղծման
            օրը։
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopNames;
