export const formatTemperature = (temp) => {
  const rounded = Math.round(temp);
  return temp > 0 ? `+${rounded}°` : `${rounded}°`;
};
