export const getDate = (date) => {
  const d = new Date(date * 1000);
  const day = d.getDay();
  const getDay = () => {
    if (day === 1) {
      return 'Monday';
    } else if (day === 2) {
      return 'Tuesday';
    } else if (day === 3) {
      return 'Wednesday';
    } else if (day === 4) {
      return 'Thursday';
    } else if (day === 5) {
      return 'Friday';
    } else if (day === 6) {
      return 'Saturday';
    } else {
      return 'Sunday';
    }
  };
  return new Date().getDay() === day ? 'Today' : getDay();
};
export const getTime = (time) => {
  return `${new Date(time * 1000).getHours()}:00`;
};
export const hasGeolocationSupport = () => {
  return !!navigator.geolocation;
};

export const getEmoji = (weather) => {
  const weatherLC = weather.toLowerCase();
  if (weatherLC.startsWith("cloud")) {
    return 'âī¸';
  } else if (weatherLC === 'rain') {
    return 'đ§ī¸';
  } else if (weatherLC === 'sun') {
    return 'âī¸';
  } else if (weatherLC === 'clear') {
    return 'âī¸'; // "đ" "đ";
  } else if (weatherLC === 'snow') {
    return 'âī¸';
  } else if (weatherLC === 'extreme') {
    return 'đŠī¸';
  }
};
