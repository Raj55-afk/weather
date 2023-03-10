import React from 'react';
import Emoji from './Emoji';

const EmojiWeather = (props) => {
  const { mainWeather: w, time, weather } = props;
  const getEmoji = () => {
    const t = parseInt(time);
    const weatherLC = w.toLowerCase();
    if (weatherLC === 'clouds') {
      return 'âī¸';
    } else if (weatherLC === 'rain') {
      return 'đ§ī¸';
    } else if (weatherLC === 'sun') {
      return t > 0 && t < 6 ? 'đ' : 'âī¸';
    } else if (weatherLC === 'clear') {
      return t > 0 && t < 6 ? 'đ' : 'âī¸'; // "đ" "đ";
    } else if (weatherLC === 'snow') {
      return 'âī¸';
    } else if (weatherLC === 'extreme') {
      return 'đŠī¸';
    }
  };
  return (
    <Emoji className="card-weather-emoji" name={weather} emoji={getEmoji()} />
  );
};

const Degree = (props) => {
  const { temp } = props;
  const temperature = Math.round(temp);//round used to take round figure value
  return (
    <div className="card-degree">
      <span className="card-degree">{temperature}Â°C</span>
    </div>
  );
};

export const Card = (props) => {
  const { time, date, minTemp, mainWeather, temp, weather } = props;
  return (
    <div className="card-body text-center">
      <span className="card-date">{date}</span>
      <EmojiWeather weather={weather} time={time} mainWeather={mainWeather} />
      <Degree temp={temp} minTemp={minTemp} />
    </div>
  );
};
export const getEmojiClassName = (weather) => {
    const weatherLC = weather.toLowerCase();
  if (weatherLC === 'clouds') {
    return 'cloud';
  } else if (weatherLC === 'rain') {
    return 'rain';
  }
  return 'sun';
};
