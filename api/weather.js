import { getReq } from './network/weather.js';

//#####··········GET相关··········#####//
//####········天气········####//
export const weather = (params, other) => {
  return getReq('/weather_mini', params, other);
};
