import { makeObservable, observable } from 'mobx'
import formatDate from "./utils/formatDate";
import formatTime from "./utils/formatTime";
import moment from "moment";
import {DAYS_LIMIT} from "./constants/daysConstants";

const currentDate = moment(new Date());

class RootStore {
  days = []
  times = []
  periods = ["Anytime", "Morning", "Afternoon", "Evening"]

  constructor() {
    makeObservable(this, {
      days: observable,
      times: observable,
    })

    this.times = [
      formatTime(6),
      formatTime(6.25),
      formatTime(6.5),
      formatTime(6.75),
      formatTime(7),
      formatTime(7.25),
      formatTime(7.5),
      formatTime(7.75),
      formatTime(8),
      formatTime(8.25),
      formatTime(8.5),
      formatTime(8.75),
    ];

    this.days = [
      formatDate(currentDate),
      ...Array.from(Array(DAYS_LIMIT), (_) => formatDate(currentDate.add(1, 'days')))
    ]
  }

  requestBooking = () => {
    alert("Booking requested!")
  }
}

export default RootStore