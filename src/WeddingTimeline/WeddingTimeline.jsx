import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import classes from "./WeddingTimeline.module.css";

export default function WeddingTimeline() {
  return (
    <Timeline position="left">
      <TimelineItem>
        <TimelineOppositeContent>
          10:30&nbsp;
          <a
            href="https://yandex.ru/maps/-/CDQvQYoJ"
            target="_blank"
            className={classes.link}
          >
            Չարենցի 17
          </a>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#626e57" }} />
          <TimelineConnector sx={{ bgcolor: "#626e57" }} />
        </TimelineSeparator>
        <TimelineContent>Փեսայի տուն</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          11:45&nbsp;
          <a
            href="https://yandex.ru/maps/-/CDQvQJ0r"
            target="_blank"
            className={classes.link}
          >
            Այգեձորի 5
          </a>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#80a472" }} />
          <TimelineConnector sx={{ bgcolor: "#80a472" }} />
        </TimelineSeparator>
        <TimelineContent>Հարսի տուն</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          13:30&nbsp;
          <a
            href="https://yandex.ru/maps/-/CDQvQCoY"
            target="_blank"
            className={classes.link}
          >
            Ռաֆայել Իսրայելյան, 21
          </a>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#5a8c46" }} />
          <TimelineConnector sx={{ bgcolor: "#5a8c46" }} />
        </TimelineSeparator>
        <TimelineContent>Սուրբ Սարգիս եկեղեցի</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          15:00&nbsp;
          <a
            href="https://yandex.ru/maps/-/CDQvQO5y"
            target="_blank"
            className={classes.link}
          >
            Լենինգրադյան, 1
          </a>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#366c21" }} />
          <TimelineConnector sx={{ bgcolor: "#366c21" }} />
        </TimelineSeparator>
        <TimelineContent>Համալիրի զագս</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          17:30&nbsp;
          <a
            href="https://yandex.ru/maps/-/CDQvQ248"
            target="_blank"
            className={classes.link}
          >
            ք. Մասիս, Մխիթար Հերացու փող., 7/8
          </a>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: "#285b14" }} />
        </TimelineSeparator>
        <TimelineContent>Morena Restaurant Complex</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
