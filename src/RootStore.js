import {action, makeObservable, observable} from 'mobx'
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
      selectDay: action,
      selectTime: action,
      selectPeriod: action,
    })

    this.times = getTimes();
    this.days = getDates();
  }

  selectDay = (day) => {
    console.log(day)
  }

  selectTime = (time) => {
    console.log(time)
  }

  selectPeriod = (period) => {
    console.log(period);
  }

  requestBooking = () => {
    alert("Booking requested!")
  }
}

export default RootStore