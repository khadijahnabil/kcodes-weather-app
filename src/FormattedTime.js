import React from "react";

export default function FormattedTime(props) {
  let hours = props.time.getHours();
  hours = hours < 10 ? "0" + hours : hours;
  let minutes = props.time.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return (
    <span>
      {hours}:{minutes}
    </span>
  );
}
