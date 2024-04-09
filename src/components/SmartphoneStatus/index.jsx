import React, { useEffect, useState } from "react";
import { Wifi, Battary } from "../../assets";
import "./SmartphoneStatus.scss";

const SmartphoneStatus = () => {
  const [time, setTime] = useState({
    hours: 0,
    minute: 0,
  });

  const getTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minute = date.getMinutes();

    setTime({
      hours: hours < 9 ? "0" + hours : hours,
      minute: minute < 9 ? "0" + minute : minute,
    });
  };

  useEffect(() => {
    getTime();
  }, [time.minute]);

  return (
    <div className="smartphone_status_bar">
      <div className="time">
        {time.hours}:{time.minute}
      </div>
      <div className="smartphone_status_bar_icons">
        <Wifi className="smartphone_status_bar_icon_wifi" />
        <Battary className="smartphone_status_bar_icon_battary" />
      </div>
    </div>
  );
};

export default SmartphoneStatus;
