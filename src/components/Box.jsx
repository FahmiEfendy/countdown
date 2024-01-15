import classes from "./style.module.scss";

const Box = ({ number, text }) => {
  return (
    <div className={classes.container}>
      <div className={classes.container__inner}>
        <div className={classes.top}></div>
        <div className={classes.bot}></div>
      </div>
      <h1>{number}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Box;
