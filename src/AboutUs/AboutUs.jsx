import classes from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={classes.wrapper}>
      <section className={classes.olive_branch}>
        <img src="images/olive.png" alt="olive branch" />
      </section>
      <div className={classes.about_couple}>
        <section>
          <p>
            Մենք ծանոթացանք քոլեջում երբ 14 տարեկան էինք։ Այդ վախտ Ռեբեկան չեր
            պատկերացնում որ մի օր նրանք կամուսնան, բայց Ռուդոլֆը վստահ ա եղել։
            Պարզվում է որ եթե մի բան շատ ուզենաս այդ անպայման կկատարվի։ 10 տարի
            անց, հոկտեմբերի 31 նրանց հարսանիքի օընը։
          </p>
        </section>
        <img src="images/aboutUs_cold.JPG" alt="couple" />
      </div>
    </div>
  );
};

export default AboutUs;
