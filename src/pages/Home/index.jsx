import { useSearchParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

import Box from "../../components/Box";
import classes from "./style.module.scss";
import FacebookIcon from "../../assets/icon-facebook.svg";
import PinterestIcon from "../../assets/icon-pinterest.svg";
import InstagramIcon from "../../assets/icon-instagram.svg";

const Home = () => {
  const [searchParams] = useSearchParams();
  const inputtedDate = searchParams.get("date");

  const [timeLeft, setTimeLeft] = useState("");

  const getTimeLeft = useCallback(() => {
    const currDate = new Date();
    const targetDate = new Date(inputtedDate || "2024-01-24 17:00:00");

    const timeLeft = targetDate - currDate;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / 1000 / 60 / 60) % 24);
    const minutes = Math.floor(timeLeft / 1000 / 60) % 60;
    const seconds = Math.floor(timeLeft / 1000) % 60;

    console.log(
      `Time Remaining: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
    );

    return { days, hours, minutes, seconds };
  }, [inputtedDate]);

  const numberFormat = (number) => {
    return number > 9 ? number : `0${number}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [getTimeLeft]);

  return (
    <>
      {timeLeft && (
        <div className={classes.container}>
          <div className={classes.container__inner}>
            <h3>WE&apos;RE LAUNCHING SOON</h3>
            <div className={classes.date__container}>
              <Box number={numberFormat(timeLeft.days)} text="DAYS" />
              <Box number={numberFormat(timeLeft.hours)} text="HOURS" />
              <Box number={numberFormat(timeLeft.minutes)} text="MINUTES" />
              <Box number={numberFormat(timeLeft.seconds)} text="SECONDS" />
            </div>
          </div>
          <div className={classes.contact}>
            <a href="">
              <img src={FacebookIcon} alt="Facebook Icon" />
            </a>
            <a href="">
              <img src={PinterestIcon} alt="Pinterest Icon" />
            </a>
            <a href="">
              <img src={InstagramIcon} alt="Instagram Icon" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
