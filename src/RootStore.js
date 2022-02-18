import {action, computed, makeObservable, observable} from 'mobx'
import getTimes from "./utils/getTimes";
import getDates from "./utils/getDates";
import moment from "moment";
import formatDate from "./utils/formatDate";
import mockApi from "./mockApi";
import {DATE_FORMAT} from "./constants/daysConstants";

const currentDate = moment(new Date());

class RootStore {
  days = []
  times = []
  periods = ["Anytime", "Morning", "Afternoon", "Evening"]
  selectedDay = formatDate(currentDate);
  selectedTime = null;
  selectedPeriod = this.periods[0];
  numOfPros = {
    isLoading: false,
    value: 0,
  };

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
      numOfPros: observable,
      setNumOfPros: action,
    })

    this.times = getTimes();
    this.days = getDates();
  }

  setSelectedDay = async (day) => {
    this.selectedDay = day;
    if(this.selectedTime) this.selectedTime = null;
    this.numOfPros = {...this.numOfPros, isLoading: true}
    const res = await mockApi.getNumberOfPros(moment(this.selectedDay, DATE_FORMAT).format('D'));
    this.numOfPros = {
      isLoading: false,
      value: res,
    }
  }

  setSelectedTime = (time) => {
    this.selectedTime = time;
  }

  setSelectedPeriod = (period) => {
    this.selectedPeriod = period;
  }

  setNumOfPros = (num) => {
    this.numOfPros = num;
  }

  get filterTimesByPeriod() {
    const times = this.times;
    switch (this.selectedPeriod) {
      case 'Anytime':
        return times.slice(0, times.indexOf(21.75) + 1);
      case 'Morning':
        return times.slice(0, times.indexOf(11.75) + 1);
      case 'Afternoon':
        return times.slice(times.indexOf(12), times.indexOf(16.75) + 1);
      case 'Evening':
        return times.slice(times.indexOf(15), times.indexOf(21.75) + 1);
      default:
        return;
    }
  }

  requestBooking = () => {
    alert(`Your booking has been made for ${this.selectedTime} on ${this.selectedDay}. We have sent your request to ${this.numOfPros.value} professionals.`)
  }
}

export default RootStore