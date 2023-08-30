import classes from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={classes.wrapper}>
      <section className={classes.olive_branch}>
        <img src="images/olive.png" alt="olive branch" />
      </section>
      <div className={classes.about_couple}>
        <section>
          <h2>We're getting married</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur debitis tempore reprehenderit id pariatur nostrum
            consequatur, accusamus similique eveniet, reiciendis necessitatibus
            quasi provident velit voluptatum rerum expedita repudiandae
            perferendis rem!
          </p>
        </section>
        <img src="images/couple.jpg" alt="couple" />
      </div>
    </div>
  );
};

export default AboutUs;
