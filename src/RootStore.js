import {action, computed, makeObservable, observable} from 'mobx'
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
      filterTimesByPeriod: computed,
    })

    this.times = getTimes();
    this.days = getDates();
  }

  setSelectedDay = (day) => {
    this.selectedDay = day;
    if(this.selectedTime) this.selectedTime = null;
  }

  setSelectedTime = (time) => {
    this.selectedTime = time;
  }

  setSelectedPeriod = (period) => {
    this.selectedPeriod = period;
  }

  get filterTimesByPeriod() {
    const times = this.times;
    switch (this.selectedPeriod) {
      case 'Anytime':
        return times.slice(0, times.indexOf('21:45pm') + 1);
      case 'Morning':
        return times.slice(0, times.indexOf('11:45am') + 1);
      case 'Afternoon':
        return times.slice(times.indexOf('12:00pm'), times.indexOf('16:45pm') + 1);
      case 'Evening':
        return times.slice(times.indexOf('15:00pm'), times.indexOf('21:45pm') + 1);
      default:
        return;
    }
  }

  requestBooking = () => {
    alert("Booking requested!")
  }
}

export default RootStore