import { makeObservable, observable } from 'mobx'
import formatDate from "./utils/formatDate";
import formatTime from "./utils/formatTime";

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