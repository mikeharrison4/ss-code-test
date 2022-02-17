import { makeObservable, observable } from 'mobx'
import formatDate from "./utils/formatDate";
import moment from "moment";
import {DAYS_LIMIT} from "./constants/daysConstants";
import getTimes from "./utils/getTimes";
import getDates from "./utils/getDates";

class RootStore {
  days = []
  times = []
  periods = ["Anytime", "Morning", "Afternoon", "Evening"]

  constructor() {
    makeObservable(this, {
      days: observable,
      times: observable,
    })

    this.times = getTimes();
    this.days = getDates();
  }

  requestBooking = () => {
    alert("Booking requested!")
  }
}

export default RootStore