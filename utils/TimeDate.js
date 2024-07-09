const getCurrentDayAndMonth = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  return { day, month };
};

const getCurrentTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
};

export {getCurrentDayAndMonth, getCurrentTime};