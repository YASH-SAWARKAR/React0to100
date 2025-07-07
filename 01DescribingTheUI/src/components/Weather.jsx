import React from "react";

const Weather = (temp) => {
  temp = 18;
  if (temp < 15) {
    return <h1>It's cold</h1>;
  } else if (temp >= 15 && temp < 25) {
    return <h1>It's Good Outside </h1>;
  } else {
    return <h1>It's hot</h1>;
  }
};

export default Weather;
