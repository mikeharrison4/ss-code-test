import {action, makeObservable, observable} from 'mobx'
import getTimes from "./utils/getTimes";
import getDates from "./utils/getDates";
import moment from "moment";
import formatDate from "./utils/formatDate";

const currentDate = moment(new Date());

class RootStore {
  days = []
  times = []
  periods = ["Anytime", "Morning", "Afternoon", "Evening"]
  selectedDay = formatDate(currentDate);
  selectedTime = null;
  selectedPeriod = this.periods[0];

  constructor() {
    makeObservable(this, {
      days: observable,
      times: observable,
      selectedDay: observable,
      setSelectedDay: action,
      selectedTime: observable,
      setSelectedTime: action,
      selectedPeriod: observable,
      setSelectedPeriod: action,
    })

    this.times = getTimes();
    this.days = getDates();
  }

  setSelectedDay = (day) => {
    this.selectedDay = day;
  }

  setSelectedTime = (time) => {
    console.log(time);
    this.selectedTime = time;
  }

  setSelectedPeriod = (period) => {
    this.selectedPeriod = period;
  }

  requestBooking = () => {
    alert("Booking requested!")
  }
}

export default RootStore