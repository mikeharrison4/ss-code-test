import { makeObservable, observable } from 'mobx'
import formatDate from "./utils/formatDate";

class RootStore {
  days = []
  times = []
  periods = ["Anytime", "Morning", "Afternoon", "Evening"]

  constructor() {
    makeObservable(this, {
      days: observable,
      times: observable,
    })

    this.times = [6, 6.25, 6.5, 6.75, 7, 7.25, 7.5, 7.75, 8, 8.25, 8.5, 8.75]
    this.days = [
      formatDate('2021-01-01'),
      formatDate('2021-01-02'),
      formatDate('2021-01-03'),
      formatDate('2021-01-04'),
      formatDate('2021-01-05')
    ]
  }

  requestBooking = () => {
    alert("Booking requested!")
  }
}

export default RootStore