import moment from "moment";
import formatDate from "./formatDate";
import {DAYS_LIMIT} from "../constants/daysConstants";

const currentDate = moment(new Date());

const getDates = () => ([
  formatDate(currentDate),
  ...Array.from(Array(DAYS_LIMIT), (_) => formatDate(currentDate.add(1, 'days')))
])

export default getDates;