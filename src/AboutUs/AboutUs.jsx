import classes from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={classes.wrapper}>
      <p className={classes.nice_text}>
        Մենք ընտանիք ենք կազմում։ Հրավիրում ենք կիսելու մեզ հետ մեր կյանքի
        լուսավոր օրը։
      </p>
      <section className={classes.olive_branch}>
        <img src="images/olive.png" alt="olive branch" />
      </section>
      <div className={classes.about_couple}>
        <p>Все, что существует на свете, когда-то было мечтой</p>
        <img src="images/aboutUs_cold.jpg" alt="couple" />
      </div>
    </div>
  );
};

export default AboutUs;
