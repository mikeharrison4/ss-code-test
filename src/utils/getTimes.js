import formatTime from "./formatTime";
import {TIME_END, TIME_INCREMENT, TIME_START} from "../constants/timesConstants";

const getTimes = () => {
  const times = [];
  for (let i = TIME_START; i <= TIME_END; i += TIME_INCREMENT) {
    times.push(i);
  }
  return times;
}

export default getTimes;