import classes from "./WhenWhere.module.css";

const WhenWhere = () => {
  return (
    <div className={classes.wrapper}>
      <h2>When & Where</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ab
        molestias tempore saepe perferendis quae, necessitatibus debitis aliquid
        earum iste.
      </p>

      <section className={classes.calendar}>
        <img src="images/calendar.png" alt="calendar" />
      
        <p>Church:trindindon</p>
        <p>Place: blablablabla</p>
      </section>
    </div>
  );
};

export default WhenWhere;
