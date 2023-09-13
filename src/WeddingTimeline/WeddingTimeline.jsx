import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import classes from "./WeddingTimeline.module.css";

export default function WeddingTimeline({ whosTimeline }) {
  return (
    <Timeline position="left">
      {whosTimeline === "groom" && (
        <>
          <TimelineItem>
            <TimelineOppositeContent className={classes.location}>
              10:00&nbsp; <br />
              <a
                href="https://yandex.ru/maps/-/CDQvQYoJ"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                Չարենցի 17
              </a>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: "#626e57" }} />
              <TimelineConnector sx={{ bgcolor: "#626e57" }} />
            </TimelineSeparator>
            <TimelineContent>
              <p className={classes.location}>Փեսայի տուն</p>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent className={classes.location}>
              12:00&nbsp; <br />
              <a
                href="https://yandex.ru/maps/-/CDQvQJ0r"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                Այգեձորի 5
              </a>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: "#80a472" }} />
              <TimelineConnector sx={{ bgcolor: "#80a472" }} />
            </TimelineSeparator>
            <TimelineContent>
              <p className={classes.location}>Հարսի տուն</p>
            </TimelineContent>
          </TimelineItem>
        </>
      )}
      {whosTimeline === "bride" && (
        <>
          <TimelineItem>
            <TimelineOppositeContent className={classes.location}>
              11:00&nbsp; <br />
              <a
                href="https://yandex.ru/maps/-/CDQvQJ0r"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                Այգեձորի 5
              </a>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: "#80a472" }} />
              <TimelineConnector sx={{ bgcolor: "#80a472" }} />
            </TimelineSeparator>
            <TimelineContent>
              <p className={classes.location}>Հարսի տուն</p>
            </TimelineContent>
          </TimelineItem>
        </>
      )}
      <TimelineItem>
        <TimelineOppositeContent className={classes.location}>
          13:30&nbsp; <br />
          <a
            href="https://yandex.ru/maps/-/CDQvQCoY"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            Ռաֆայել Իսրայելյան, 21
          </a>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#5a8c46" }} />
          <TimelineConnector sx={{ bgcolor: "#5a8c46" }} />
        </TimelineSeparator>
        <TimelineContent>
          <p className={classes.location}>Սուրբ Սարգիս եկեղեցի</p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className={classes.location}>
          15:00&nbsp; <br />
          <a
            href="https://yandex.ru/maps/-/CDQvQO5y"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            Լենինգրադյան, 1
          </a>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#366c21" }} />
          <TimelineConnector sx={{ bgcolor: "#366c21" }} />
        </TimelineSeparator>
        <TimelineContent className={classes.location}>
          <p className={classes.location}>Համալիրի զագս</p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className={classes.location}>
          17:30&nbsp; <br />
          <a
            href="https://yandex.ru/maps/-/CDQvQ248"
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            ք. Մասիս, Մխիթար Հերացու փող., 7/8
          </a>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#285b14" }} />
        </TimelineSeparator>
        <TimelineContent>
          <p className={classes.location}>Morena Restaurant Complex</p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
